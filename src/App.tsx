/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Question, ExamMode, ExamResult, Category } from './types';
import { EXAM_QUESTIONS, EXAM_METADATA, CATEGORIES } from './data/examData';
import { Header } from './components/Header';
import { IntroScreen } from './components/IntroScreen';
import { QuestionCard } from './components/QuestionCard';
import { QuestionPalette } from './components/QuestionPalette';
import { SubmitModal } from './components/SubmitModal';
import { ExamResults } from './components/ExamResults';
import { 
  ChevronLeft, 
  ChevronRight, 
  Send, 
  Bookmark, 
  LayoutGrid, 
  Keyboard, 
  RotateCcw,
  Sparkles
} from 'lucide-react';

const STORAGE_KEY_LATEST_SCORE = 'gktieuhoa_latest_score';

export default function App() {
  const [mode, setMode] = useState<ExamMode>('intro');
  const [activeQuestions, setActiveQuestions] = useState<Question[]>(EXAM_QUESTIONS);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<number, boolean>>({});
  const [isTimed, setIsTimed] = useState<boolean>(true);
  const [timeLeft, setTimeLeft] = useState<number | null>(EXAM_METADATA.durationMinutes * 60);
  const [isPaletteOpen, setIsPaletteOpen] = useState<boolean>(false);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState<boolean>(false);
  const [result, setResult] = useState<ExamResult | null>(null);
  const [savedScore, setSavedScore] = useState<number | null>(() => {
    try {
      const val = localStorage.getItem(STORAGE_KEY_LATEST_SCORE);
      return val ? parseFloat(val) : null;
    } catch {
      return null;
    }
  });

  // Category counts from master questions
  const categoryCounts = useMemo(() => {
    const counts: Record<Category, number> = {
      'GIẢI PHẪU': 0,
      'MÔ PHÔI': 0,
      'SINH LÝ': 0,
      'VI SINH': 0,
      'DƯỢC LÝ': 0,
      'CHẨN ĐOÁN HÌNH ẢNH': 0,
      'GIẢI PHẪU BỆNH': 0,
      'CẬN LÂM SÀNG': 0,
    };
    EXAM_QUESTIONS.forEach((q) => {
      if (counts[q.category] !== undefined) {
        counts[q.category]++;
      }
    });
    return counts;
  }, []);

  // Compute stats
  const answeredCount = useMemo(() => {
    return activeQuestions.filter((q) => userAnswers[q.id] !== undefined).length;
  }, [activeQuestions, userAnswers]);

  const flaggedCount = useMemo(() => {
    return activeQuestions.filter((q) => flaggedQuestions[q.id]).length;
  }, [activeQuestions, flaggedQuestions]);

  // Submit test function
  const handleCalculateAndSubmit = useCallback(() => {
    let correctCount = 0;
    let wrongCount = 0;

    const catStats: Record<Category, { total: number; correct: number }> = {
      'GIẢI PHẪU': { total: 0, correct: 0 },
      'MÔ PHÔI': { total: 0, correct: 0 },
      'SINH LÝ': { total: 0, correct: 0 },
      'VI SINH': { total: 0, correct: 0 },
      'DƯỢC LÝ': { total: 0, correct: 0 },
      'CHẨN ĐOÁN HÌNH ẢNH': { total: 0, correct: 0 },
      'GIẢI PHẪU BỆNH': { total: 0, correct: 0 },
      'CẬN LÂM SÀNG': { total: 0, correct: 0 },
    };

    activeQuestions.forEach((q) => {
      if (catStats[q.category]) {
        catStats[q.category].total++;
      }

      const selected = userAnswers[q.id];
      if (selected !== undefined) {
        if (selected === q.correctAnswer) {
          correctCount++;
          if (catStats[q.category]) {
            catStats[q.category].correct++;
          }
        } else {
          wrongCount++;
        }
      }
    });

    const totalQuestions = activeQuestions.length;
    const unansweredCount = totalQuestions - (correctCount + wrongCount);
    const scoreOutOf10 = (correctCount / totalQuestions) * 10;
    const percentage = (correctCount / totalQuestions) * 100;
    const timeSpentSeconds = isTimed && timeLeft !== null 
      ? Math.max(0, EXAM_METADATA.durationMinutes * 60 - timeLeft)
      : 0;

    const breakdown = CATEGORIES.map((cat) => {
      const stat = catStats[cat] || { total: 0, correct: 0 };
      return {
        category: cat,
        total: stat.total,
        correct: stat.correct,
        percentage: stat.total > 0 ? (stat.correct / stat.total) * 100 : 0,
      };
    }).filter((b) => b.total > 0);

    const examResult: ExamResult = {
      totalQuestions,
      answeredCount: correctCount + wrongCount,
      correctCount,
      wrongCount,
      unansweredCount,
      scoreOutOf10,
      percentage,
      timeSpentSeconds,
      categoryBreakdown: breakdown,
    };

    setResult(examResult);
    setMode('review');
    setIsSubmitModalOpen(false);

    try {
      localStorage.setItem(STORAGE_KEY_LATEST_SCORE, scoreOutOf10.toString());
      setSavedScore(scoreOutOf10);
    } catch {
      // Ignore localStorage errors
    }

    // Scroll window smoothly to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeQuestions, userAnswers, isTimed, timeLeft]);

  // Timer countdown hook
  useEffect(() => {
    if (mode !== 'testing' || !isTimed || timeLeft === null) return;

    if (timeLeft <= 0) {
      handleCalculateAndSubmit();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === null || prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [mode, isTimed, timeLeft, handleCalculateAndSubmit]);

  // Keyboard navigation shortcuts
  useEffect(() => {
    if (mode !== 'testing') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept typing in inputs
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement).tagName)) {
        return;
      }

      const currentQ = activeQuestions[currentIndex];
      if (!currentQ) return;

      if (e.key === '1' || e.key.toLowerCase() === 'a') {
        e.preventDefault();
        setUserAnswers((prev) => ({ ...prev, [currentQ.id]: 0 }));
      } else if (e.key === '2' || e.key.toLowerCase() === 'b') {
        e.preventDefault();
        setUserAnswers((prev) => ({ ...prev, [currentQ.id]: 1 }));
      } else if (e.key === '3' || e.key.toLowerCase() === 'c') {
        e.preventDefault();
        setUserAnswers((prev) => ({ ...prev, [currentQ.id]: 2 }));
      } else if (e.key === '4' || e.key.toLowerCase() === 'd') {
        e.preventDefault();
        setUserAnswers((prev) => ({ ...prev, [currentQ.id]: 3 }));
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        setCurrentIndex((prev) => Math.min(prev + 1, activeQuestions.length - 1));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key.toLowerCase() === 'f') {
        e.preventDefault();
        setFlaggedQuestions((prev) => ({ ...prev, [currentQ.id]: !prev[currentQ.id] }));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mode, activeQuestions, currentIndex]);

  // Start Exam Handler
  const handleStartExam = (shuffle: boolean, timed: boolean) => {
    let questionsToUse = [...EXAM_QUESTIONS];
    if (shuffle) {
      questionsToUse.sort(() => Math.random() - 0.5);
    }
    setActiveQuestions(questionsToUse);
    setCurrentIndex(0);
    setUserAnswers({});
    setFlaggedQuestions({});
    setIsTimed(timed);
    setTimeLeft(timed ? EXAM_METADATA.durationMinutes * 60 : null);
    setResult(null);
    setMode('testing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Retake all
  const handleRetakeAll = () => {
    setActiveQuestions(EXAM_QUESTIONS);
    setCurrentIndex(0);
    setUserAnswers({});
    setFlaggedQuestions({});
    setTimeLeft(isTimed ? EXAM_METADATA.durationMinutes * 60 : null);
    setResult(null);
    setMode('testing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Retake only wrong questions
  const handleRetakeWrong = (wrongIds: number[]) => {
    const wrongQs = EXAM_QUESTIONS.filter((q) => wrongIds.includes(q.id));
    if (wrongQs.length === 0) return;
    setActiveQuestions(wrongQs);
    setCurrentIndex(0);
    setUserAnswers({});
    setFlaggedQuestions({});
    // Proportional timer: 40 mins / 70 questions ~ 34s per question
    const proportionalSeconds = Math.max(300, Math.ceil((wrongQs.length / 70) * EXAM_METADATA.durationMinutes * 60));
    setTimeLeft(isTimed ? proportionalSeconds : null);
    setResult(null);
    setMode('testing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentQuestion = activeQuestions[currentIndex];

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 flex flex-col font-sans antialiased selection:bg-emerald-100 selection:text-emerald-900">
      {/* Header bar (sticky) */}
      {mode !== 'intro' && (
        <Header
          mode={mode}
          timeLeft={timeLeft}
          totalQuestions={activeQuestions.length}
          answeredCount={answeredCount}
          flaggedCount={flaggedCount}
          onOpenPalette={() => setIsPaletteOpen(true)}
          onRequestSubmit={() => setIsSubmitModalOpen(true)}
          onRetake={handleRetakeAll}
        />
      )}

      {/* Main Content Area */}
      <main className="flex-1 pb-16">
        {mode === 'intro' && (
          <IntroScreen
            onStartExam={handleStartExam}
            savedAttemptScore={savedScore}
            categoryCounts={categoryCounts}
          />
        )}

        {mode === 'testing' && currentQuestion && (
          <div className="max-w-4xl mx-auto px-4 py-6">
            {/* Top Progress bar */}
            <div className="mb-6 bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
              <div className="flex items-center justify-between text-xs text-slate-600 font-medium mb-2">
                <span>
                  Tiến độ: <b>{answeredCount}</b> / {activeQuestions.length} câu ({Math.round((answeredCount / activeQuestions.length) * 100)}%)
                </span>
                <span>Câu {currentIndex + 1} / {activeQuestions.length}</span>
              </div>
              <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                <div 
                  className="bg-emerald-600 h-full rounded-full transition-all duration-300"
                  style={{ width: `${(answeredCount / activeQuestions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Current Question Card */}
            <QuestionCard
              question={currentQuestion}
              index={currentIndex}
              total={activeQuestions.length}
              userAnswer={userAnswers[currentQuestion.id]}
              isFlagged={Boolean(flaggedQuestions[currentQuestion.id])}
              mode="testing"
              onSelectOption={(optIdx) => {
                setUserAnswers((prev) => ({ ...prev, [currentQuestion.id]: optIdx }));
              }}
              onToggleFlag={() => {
                setFlaggedQuestions((prev) => ({
                  ...prev,
                  [currentQuestion.id]: !prev[currentQuestion.id],
                }));
              }}
              onClearOption={() => {
                setUserAnswers((prev) => {
                  const copy = { ...prev };
                  delete copy[currentQuestion.id];
                  return copy;
                });
              }}
            />

            {/* Bottom Nav Controls */}
            <div className="mt-6 flex items-center justify-between gap-3">
              <button
                id="btn-prev-question"
                type="button"
                onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
                disabled={currentIndex === 0}
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl border font-semibold text-xs sm:text-sm transition-all ${
                  currentIndex === 0 
                    ? 'opacity-40 cursor-not-allowed bg-slate-100 text-slate-400 border-slate-200' 
                    : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-300 shadow-2xs'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Câu trước</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsPaletteOpen(true)}
                  className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white border border-slate-200 rounded-xl"
                  title="Xem toàn bộ danh sách 70 câu"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>Câu {currentIndex + 1} / {activeQuestions.length}</span>
                </button>

                <button
                  id="btn-flag-current"
                  type="button"
                  onClick={() => {
                    setFlaggedQuestions((prev) => ({
                      ...prev,
                      [currentQuestion.id]: !prev[currentQuestion.id],
                    }));
                  }}
                  className={`flex items-center gap-1.5 px-3 py-2.5 rounded-xl border text-xs sm:text-sm font-semibold transition-colors ${
                    flaggedQuestions[currentQuestion.id]
                      ? 'bg-amber-100 text-amber-800 border-amber-300'
                      : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <Bookmark className={`w-4 h-4 ${flaggedQuestions[currentQuestion.id] ? 'fill-amber-600 text-amber-600' : 'text-slate-400'}`} />
                  <span className="hidden sm:inline">
                    {flaggedQuestions[currentQuestion.id] ? 'Đã đánh dấu' : 'Đánh dấu'}
                  </span>
                </button>
              </div>

              {currentIndex === activeQuestions.length - 1 ? (
                <button
                  id="btn-nav-submit"
                  type="button"
                  onClick={() => setIsSubmitModalOpen(true)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-xs transition-colors"
                >
                  <span>Nộp bài thi</span>
                  <Send className="w-4 h-4" />
                </button>
              ) : (
                <button
                  id="btn-next-question"
                  type="button"
                  onClick={() => setCurrentIndex((prev) => Math.min(prev + 1, activeQuestions.length - 1))}
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm shadow-2xs transition-colors"
                >
                  <span>Câu tiếp</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Keyboard Shortcuts Hint */}
            <div className="mt-8 text-center text-xs text-slate-600 hidden md:flex items-center justify-center gap-4">
              <span className="flex items-center gap-1">
                <Keyboard className="w-3.5 h-3.5" />
                Phím tắt:
              </span>
              <span><kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded font-mono text-[11px] shadow-2xs">A/B/C/D</kbd> hoặc <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded font-mono text-[11px] shadow-2xs">1/2/3/4</kbd> để chọn đáp án</span>
              <span>•</span>
              <span><kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded font-mono text-[11px] shadow-2xs">← / →</kbd> chuyển câu</span>
              <span>•</span>
              <span><kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded font-mono text-[11px] shadow-2xs">F</kbd> đánh dấu xem lại</span>
            </div>
          </div>
        )}

        {mode === 'review' && result && (
          <ExamResults
            questions={activeQuestions}
            userAnswers={userAnswers}
            result={result}
            onRetakeAll={handleRetakeAll}
            onRetakeWrong={handleRetakeWrong}
          />
        )}
      </main>

      {/* Question Palette Drawer */}
      <QuestionPalette
        isOpen={isPaletteOpen}
        onClose={() => setIsPaletteOpen(false)}
        questions={activeQuestions}
        currentQuestionIndex={currentIndex}
        onSelectQuestion={(idx) => setCurrentIndex(idx)}
        userAnswers={userAnswers}
        flaggedQuestions={flaggedQuestions}
        mode={mode}
      />

      {/* Submit Confirmation Modal */}
      <SubmitModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
        onConfirm={handleCalculateAndSubmit}
        totalQuestions={activeQuestions.length}
        answeredCount={answeredCount}
        flaggedCount={flaggedCount}
      />
    </div>
  );
}
