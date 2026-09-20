import React from 'react';
import { Question, ExamResult, Category } from '../types';
import { QuestionCard } from './QuestionCard';
import { 
  Award, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  RotateCcw, 
  Search, 
  Filter, 
  ArrowRight,
  TrendingUp,
  Clock,
  BookOpen,
  Share2,
  ListFilter
} from 'lucide-react';

interface ExamResultsProps {
  questions: Question[];
  userAnswers: Record<number, number>;
  result: ExamResult;
  onRetakeAll: () => void;
  onRetakeWrong: (wrongQuestionIds: number[]) => void;
}

export const ExamResults: React.FC<ExamResultsProps> = ({
  questions,
  userAnswers,
  result,
  onRetakeAll,
  onRetakeWrong,
}) => {
  // Default filter: 'WRONG' if there are wrong questions, else 'ALL'
  const [filterMode, setFilterMode] = React.useState<'WRONG' | 'CORRECT' | 'UNANSWERED' | 'ALL'>('WRONG');
  const [categoryFilter, setCategoryFilter] = React.useState<string>('ALL');
  const [searchQuery, setSearchQuery] = React.useState<string>('');

  // Identify wrong, correct, unanswered question IDs
  const wrongQuestions: Question[] = [];
  const correctQuestions: Question[] = [];
  const unansweredQuestions: Question[] = [];

  questions.forEach((q) => {
    const ans = userAnswers[q.id];
    if (ans === undefined) {
      unansweredQuestions.push(q);
    } else if (ans === q.correctAnswer) {
      correctQuestions.push(q);
    } else {
      wrongQuestions.push(q);
    }
  });

  // Calculate filtered questions
  const filteredQuestions = questions.filter((q) => {
    const ans = userAnswers[q.id];
    const isAnswered = ans !== undefined;
    const isCorrect = isAnswered && ans === q.correctAnswer;
    const isWrong = isAnswered && !isCorrect;

    // Status filter
    if (filterMode === 'WRONG' && !isWrong) return false;
    if (filterMode === 'CORRECT' && !isCorrect) return false;
    if (filterMode === 'UNANSWERED' && isAnswered) return false;

    // Category filter
    if (categoryFilter !== 'ALL' && q.category !== categoryFilter) return false;

    // Search query filter
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      const matchQuestion = q.question.toLowerCase().includes(query);
      const matchOptions = q.options.some((opt) => opt.toLowerCase().includes(query));
      const matchExplanation = q.explanation.toLowerCase().includes(query);
      if (!matchQuestion && !matchOptions && !matchExplanation) return false;
    }

    return true;
  });

  const getVerdict = (score: number) => {
    if (score >= 8.5) return { text: 'Xuất sắc', color: 'text-emerald-700 bg-emerald-100 border-emerald-300' };
    if (score >= 7.0) return { text: 'Giỏi', color: 'text-blue-700 bg-blue-100 border-blue-300' };
    if (score >= 5.5) return { text: 'Khá', color: 'text-indigo-700 bg-indigo-100 border-indigo-300' };
    if (score >= 5.0) return { text: 'Đạt', color: 'text-amber-700 bg-amber-100 border-amber-300' };
    return { text: 'Cần ôn tập thêm', color: 'text-red-700 bg-red-100 border-red-300' };
  };

  const verdict = getVerdict(result.scoreOutOf10);

  const formatMinutes = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins} phút ${secs} giây`;
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      {/* 1. Score Summary Hero Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 p-6 sm:p-8 text-white">
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
            <div className="text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold uppercase tracking-wider backdrop-blur-xs mb-3">
                <Award className="w-3.5 h-3.5" />
                Kết quả bài thi Module Tiêu hóa
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Hoàn thành bài thi
              </h1>
              <p className="text-emerald-100 text-sm mt-1">
                Thời gian làm bài: <b>{formatMinutes(result.timeSpentSeconds)}</b> • Đề thi 70 câu trắc nghiệm
              </p>
            </div>

            {/* Big Score Box */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 text-center border border-white/20 shrink-0 min-w-[200px]">
              <div className="text-xs uppercase tracking-wider text-emerald-100 font-semibold mb-1">
                Điểm tổng kết
              </div>
              <div className="text-4xl sm:text-5xl font-black tracking-tight text-white">
                {result.scoreOutOf10.toFixed(2)}
                <span className="text-xl sm:text-2xl font-normal text-emerald-200"> / 10</span>
              </div>
              <div className="mt-2 inline-block px-3 py-0.5 rounded-full text-xs font-bold bg-white text-slate-900 shadow-xs">
                {verdict.text} ({result.percentage.toFixed(1)}%)
              </div>
            </div>
          </div>
        </div>

        {/* Metric Bar */}
        <div className="grid grid-cols-3 divide-x divide-slate-100 border-b border-slate-200 bg-slate-50/70 py-4 px-2 sm:px-6 text-center">
          <div>
            <div className="text-xs text-slate-500 font-medium mb-0.5 flex items-center justify-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Số câu đúng</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-emerald-600">
              {result.correctCount} <span className="text-xs text-slate-400 font-normal">/ {result.totalQuestions}</span>
            </div>
          </div>

          <div>
            <div className="text-xs text-slate-500 font-medium mb-0.5 flex items-center justify-center gap-1">
              <XCircle className="w-3.5 h-3.5 text-red-600" />
              <span>Số câu sai</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-red-600">
              {result.wrongCount} <span className="text-xs text-slate-400 font-normal">câu</span>
            </div>
          </div>

          <div>
            <div className="text-xs text-slate-500 font-medium mb-0.5 flex items-center justify-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
              <span>Chưa làm</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-slate-700">
              {result.unansweredCount} <span className="text-xs text-slate-400 font-normal">câu</span>
            </div>
          </div>
        </div>

        {/* Action Buttons Bar */}
        <div className="p-4 sm:p-6 bg-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs sm:text-sm text-slate-600">
            {result.wrongCount > 0 ? (
              <span>
                Bạn có <b className="text-red-600 font-bold">{result.wrongCount} câu làm sai</b>. Bạn có thể luyện tập lại ngay chỉ với các câu này.
              </span>
            ) : (
              <span className="text-emerald-700 font-medium">
                Tuyệt vời! Bạn không làm sai câu hỏi nào.
              </span>
            )}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {result.wrongCount > 0 && (
              <button
                id="btn-retake-wrong-only"
                onClick={() => onRetakeWrong(wrongQuestions.map((q) => q.id))}
                className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm shadow-xs transition-colors flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Luyện tập {result.wrongCount} câu sai</span>
              </button>
            )}

            <button
              id="btn-retake-all"
              onClick={onRetakeAll}
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4 text-slate-500" />
              <span>Làm lại toàn bộ đề</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Subject / Category Performance Matrix */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs">
        <h2 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-indigo-600" />
          Phân tích kết quả theo 8 học phần (Chuyên đề)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {result.categoryBreakdown.map((cat) => {
            const pct = cat.percentage;
            let barColor = 'bg-emerald-500';
            if (pct < 50) barColor = 'bg-red-500';
            else if (pct < 70) barColor = 'bg-amber-500';

            return (
              <div 
                key={cat.category}
                onClick={() => setCategoryFilter(cat.category)}
                className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                  categoryFilter === cat.category 
                    ? 'border-indigo-400 bg-indigo-50/50 ring-2 ring-indigo-200'
                    : 'border-slate-200 bg-slate-50/60 hover:bg-slate-100/70'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="font-semibold text-xs text-slate-800 line-clamp-1">{cat.category}</span>
                  <span className="text-xs font-bold text-slate-900 shrink-0">
                    {cat.correct}/{cat.total}
                  </span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden mb-1.5">
                  <div 
                    className={`h-full ${barColor} rounded-full transition-all duration-500`} 
                    style={{ width: `${pct}%` }} 
                  />
                </div>
                <div className="flex justify-between items-center text-[11px] text-slate-500">
                  <span>Tỷ lệ đúng</span>
                  <span className="font-semibold text-slate-700">{pct.toFixed(0)}%</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Detailed Review Section Header & Filters */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-emerald-600" />
              Chi tiết câu hỏi, đáp án & lời giải giải thích
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Xem lại các câu làm sai và trích dẫn trang sách y khoa chuẩn ĐHYD TP.HCM
            </p>
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Tìm kiếm nội dung câu hỏi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        {/* Filter Buttons: Primary request "see which questions they got wrong immediately" */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <button
            id="filter-wrong"
            onClick={() => setFilterMode('WRONG')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-2xs ${
              filterMode === 'WRONG'
                ? 'bg-red-600 text-white shadow-xs'
                : 'bg-white border border-red-200 text-red-700 hover:bg-red-50'
            }`}
          >
            <XCircle className="w-4 h-4" />
            <span>Chỉ xem câu sai ({wrongQuestions.length})</span>
          </button>

          <button
            id="filter-all"
            onClick={() => setFilterMode('ALL')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-2xs ${
              filterMode === 'ALL'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            <ListFilter className="w-4 h-4" />
            <span>Tất cả câu ({questions.length})</span>
          </button>

          <button
            id="filter-correct"
            onClick={() => setFilterMode('CORRECT')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-2xs ${
              filterMode === 'CORRECT'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-white border border-emerald-200 text-emerald-700 hover:bg-emerald-50'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Câu đúng ({correctQuestions.length})</span>
          </button>

          {unansweredQuestions.length > 0 && (
            <button
              id="filter-unanswered"
              onClick={() => setFilterMode('UNANSWERED')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-2xs ${
                filterMode === 'UNANSWERED'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-white border border-amber-200 text-amber-700 hover:bg-amber-50'
              }`}
            >
              <AlertCircle className="w-4 h-4" />
              <span>Chưa trả lời ({unansweredQuestions.length})</span>
            </button>
          )}

          {/* Category reset if active */}
          {categoryFilter !== 'ALL' && (
            <button
              onClick={() => setCategoryFilter('ALL')}
              className="text-xs text-indigo-600 hover:text-indigo-800 bg-indigo-50 border border-indigo-200 px-3 py-1.5 rounded-xl font-medium"
            >
              Bỏ lọc chuyên đề ({categoryFilter}) ✕
            </button>
          )}
        </div>
      </div>

      {/* 4. Question Cards List in Review Mode */}
      <div className="space-y-6">
        {filteredQuestions.map((question, idx) => (
          <QuestionCard
            key={question.id}
            question={question}
            index={idx}
            total={questions.length}
            userAnswer={userAnswers[question.id]}
            mode="review"
          />
        ))}

        {filteredQuestions.length === 0 && (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center shadow-xs">
            <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-3 opacity-80" />
            <h3 className="text-base font-bold text-slate-800 mb-1">
              {filterMode === 'WRONG' ? 'Bạn không có câu trả lời sai nào!' : 'Không tìm thấy câu hỏi phù hợp'}
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              {filterMode === 'WRONG'
                ? 'Xuất sắc! Bạn đã làm đúng tất cả các câu hỏi được kiểm tra.'
                : 'Hãy thử đổi bộ lọc hoặc xóa từ khóa tìm kiếm.'}
            </p>
            {filterMode === 'WRONG' ? (
              <button
                onClick={() => setFilterMode('ALL')}
                className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-semibold hover:bg-slate-800"
              >
                Xem tất cả câu hỏi
              </button>
            ) : (
              <button
                onClick={() => {
                  setFilterMode('ALL');
                  setCategoryFilter('ALL');
                  setSearchQuery('');
                }}
                className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-semibold hover:bg-slate-800"
              >
                Đặt lại toàn bộ bộ lọc
              </button>
            )}
          </div>
        )}
      </div>

      {/* 5. Bottom Navigation / Retake Bar */}
      <div className="sticky bottom-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200 p-4 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-slate-600 text-center sm:text-left">
          Đang hiển thị <b>{filteredQuestions.length}</b> / {questions.length} câu hỏi • Điểm số: <b>{result.scoreOutOf10.toFixed(2)} / 10</b>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          {wrongQuestions.length > 0 && (
            <button
              onClick={() => onRetakeWrong(wrongQuestions.map((q) => q.id))}
              className="flex-1 sm:flex-initial px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Thi lại {wrongQuestions.length} câu sai</span>
            </button>
          )}

          <button
            onClick={onRetakeAll}
            className="flex-1 sm:flex-initial px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Làm lại từ đầu</span>
          </button>
        </div>
      </div>
    </div>
  );
};
