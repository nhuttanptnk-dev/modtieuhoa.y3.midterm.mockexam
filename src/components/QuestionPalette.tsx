import React from 'react';
import { Question, ExamMode, Category } from '../types';
import { CATEGORIES } from '../data/examData';
import { X, Bookmark, CheckCircle2, XCircle, AlertCircle, Filter } from 'lucide-react';

interface QuestionPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  questions: Question[];
  currentQuestionIndex: number;
  onSelectQuestion: (index: number) => void;
  userAnswers: Record<number, number>;
  flaggedQuestions: Record<number, boolean>;
  mode: ExamMode;
}

export const QuestionPalette: React.FC<QuestionPaletteProps> = ({
  isOpen,
  onClose,
  questions,
  currentQuestionIndex,
  onSelectQuestion,
  userAnswers,
  flaggedQuestions,
  mode,
}) => {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('ALL');
  const [statusFilter, setStatusFilter] = React.useState<'ALL' | 'WRONG' | 'CORRECT' | 'UNANSWERED' | 'FLAGGED'>('ALL');

  if (!isOpen) return null;

  // Filter questions for display in grid
  const filteredQuestionsWithIndices = questions
    .map((q, idx) => ({ question: q, originalIndex: idx }))
    .filter(({ question, originalIndex }) => {
      // Category filter
      if (selectedCategory !== 'ALL' && question.category !== selectedCategory) {
        return false;
      }

      const isAnswered = userAnswers[question.id] !== undefined;
      const isCorrect = isAnswered && userAnswers[question.id] === question.correctAnswer;
      const isFlagged = Boolean(flaggedQuestions[question.id]);

      // Status filter
      if (statusFilter === 'FLAGGED') return isFlagged;
      if (statusFilter === 'UNANSWERED') return !isAnswered;
      if (statusFilter === 'CORRECT') return isCorrect;
      if (statusFilter === 'WRONG') return isAnswered && !isCorrect;

      return true;
    });

  // Calculate statistics
  let answeredCount = 0;
  let correctCount = 0;
  let wrongCount = 0;
  let flaggedCount = 0;

  questions.forEach((q) => {
    const isAnswered = userAnswers[q.id] !== undefined;
    if (isAnswered) {
      answeredCount++;
      if (userAnswers[q.id] === q.correctAnswer) {
        correctCount++;
      } else {
        wrongCount++;
      }
    }
    if (flaggedQuestions[q.id]) {
      flaggedCount++;
    }
  });
  const unansweredCount = questions.length - answeredCount;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity" 
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10">
        {/* Drawer Header */}
        <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div>
            <h2 className="text-base font-bold text-slate-900">Bảng câu hỏi (70 câu)</h2>
            <p className="text-xs text-slate-500">
              {mode === 'testing' ? 'Bấm vào số câu để chuyển đến câu hỏi đó' : 'Tổng quan kết quả từng câu'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/70 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Legend / Statistics Summary */}
        <div className="p-3 bg-white border-b border-slate-100 text-xs">
          {mode === 'testing' ? (
            <div className="flex items-center justify-around gap-2 text-center">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-emerald-600 inline-block" />
                <span className="text-slate-600">Đã làm: <b>{answeredCount}</b></span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-slate-200 border border-slate-300 inline-block" />
                <span className="text-slate-600">Chưa làm: <b>{unansweredCount}</b></span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                <span className="text-slate-600">Đánh dấu: <b>{flaggedCount}</b></span>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-1.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                <div className="font-bold text-sm">{correctCount}</div>
                <div className="text-[10px] uppercase font-semibold">Đúng</div>
              </div>
              <div className="p-1.5 rounded bg-red-50 text-red-800 border border-red-200">
                <div className="font-bold text-sm">{wrongCount}</div>
                <div className="text-[10px] uppercase font-semibold">Sai</div>
              </div>
              <div className="p-1.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                <div className="font-bold text-sm">{unansweredCount}</div>
                <div className="text-[10px] uppercase font-semibold">Bỏ qua</div>
              </div>
            </div>
          )}
        </div>

        {/* Filter Controls */}
        <div className="p-3 bg-slate-50 border-b border-slate-200 space-y-2">
          {/* Quick status filters */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
            <button
              onClick={() => setStatusFilter('ALL')}
              className={`px-2.5 py-1 rounded-md font-medium whitespace-nowrap transition-colors ${
                statusFilter === 'ALL'
                  ? 'bg-slate-900 text-white'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              Tất cả ({questions.length})
            </button>

            {mode === 'review' && (
              <>
                <button
                  onClick={() => setStatusFilter('WRONG')}
                  className={`px-2.5 py-1 rounded-md font-medium whitespace-nowrap transition-colors ${
                    statusFilter === 'WRONG'
                      ? 'bg-red-600 text-white'
                      : 'bg-white border border-red-200 text-red-700 hover:bg-red-50'
                  }`}
                >
                  Câu sai ({wrongCount})
                </button>
                <button
                  onClick={() => setStatusFilter('CORRECT')}
                  className={`px-2.5 py-1 rounded-md font-medium whitespace-nowrap transition-colors ${
                    statusFilter === 'CORRECT'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-white border border-emerald-200 text-emerald-700 hover:bg-emerald-50'
                  }`}
                >
                  Câu đúng ({correctCount})
                </button>
              </>
            )}

            <button
              onClick={() => setStatusFilter('UNANSWERED')}
              className={`px-2.5 py-1 rounded-md font-medium whitespace-nowrap transition-colors ${
                statusFilter === 'UNANSWERED'
                  ? 'bg-slate-700 text-white'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              Chưa làm ({unansweredCount})
            </button>

            {flaggedCount > 0 && (
              <button
                onClick={() => setStatusFilter('FLAGGED')}
                className={`px-2.5 py-1 rounded-md font-medium whitespace-nowrap transition-colors ${
                  statusFilter === 'FLAGGED'
                    ? 'bg-amber-500 text-white'
                    : 'bg-white border border-amber-200 text-amber-700 hover:bg-amber-50'
                }`}
              >
                Đánh dấu ({flaggedCount})
              </button>
            )}
          </div>

          {/* Category Dropdown Filter */}
          <div className="flex items-center gap-2">
            <Filter className="w-3.5 h-3.5 text-slate-500 shrink-0" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full text-xs bg-white border border-slate-300 rounded-md px-2 py-1 text-slate-800 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            >
              <option value="ALL">Toàn bộ 8 chuyên khoa</option>
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* 70 Question Grid */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="grid grid-cols-5 sm:grid-cols-6 gap-2">
            {filteredQuestionsWithIndices.map(({ question, originalIndex }) => {
              const isCurrent = currentQuestionIndex === originalIndex;
              const isAnswered = userAnswers[question.id] !== undefined;
              const isCorrect = isAnswered && userAnswers[question.id] === question.correctAnswer;
              const isWrong = isAnswered && !isCorrect;
              const isFlagged = Boolean(flaggedQuestions[question.id]);

              let buttonStyle = 'bg-white border-slate-200 text-slate-700 hover:border-slate-400';

              if (mode === 'testing') {
                if (isAnswered) {
                  buttonStyle = 'bg-emerald-600 text-white border-emerald-600 font-bold';
                }
              } else if (mode === 'review') {
                if (isCorrect) {
                  buttonStyle = 'bg-emerald-600 text-white border-emerald-600 font-bold';
                } else if (isWrong) {
                  buttonStyle = 'bg-red-500 text-white border-red-500 font-bold';
                } else {
                  buttonStyle = 'bg-slate-100 text-slate-500 border-slate-200';
                }
              }

              return (
                <button
                  key={question.id}
                  id={`palette-btn-q${question.id}`}
                  onClick={() => {
                    onSelectQuestion(originalIndex);
                    onClose();
                  }}
                  className={`relative h-11 rounded-xl border text-sm font-semibold flex items-center justify-center transition-all ${buttonStyle} ${
                    isCurrent ? 'ring-2 ring-indigo-500 ring-offset-2' : ''
                  }`}
                  title={`Câu ${question.id}: ${question.category}`}
                >
                  <span>{question.id}</span>
                  {isFlagged && (
                    <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-amber-400 ring-1 ring-white" />
                  )}
                </button>
              );
            })}
          </div>

          {filteredQuestionsWithIndices.length === 0 && (
            <div className="text-center py-12 text-slate-400 text-sm">
              Không có câu hỏi nào khớp với bộ lọc.
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 border-t border-slate-200 bg-slate-50 text-center text-xs text-slate-500">
          Module Tiêu Hóa • ĐHYD TP.HCM
        </div>
      </div>
    </div>
  );
};
