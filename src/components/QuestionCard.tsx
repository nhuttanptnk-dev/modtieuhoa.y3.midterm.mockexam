import React from 'react';
import { Question, ExamMode } from '../types';
import { Bookmark, CheckCircle2, XCircle, HelpCircle, BookOpen, AlertTriangle } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  index: number; // 0-based index in current question set
  total: number;
  userAnswer?: number; // 0..3 or undefined
  isFlagged?: boolean;
  mode: ExamMode;
  onSelectOption?: (optionIndex: number) => void;
  onToggleFlag?: () => void;
  onClearOption?: () => void;
}

const OPTION_LABELS = ['A', 'B', 'C', 'D'] as const;

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  index,
  total,
  userAnswer,
  isFlagged,
  mode,
  onSelectOption,
  onToggleFlag,
  onClearOption,
}) => {
  const isAnswered = userAnswer !== undefined;
  const isCorrect = isAnswered && userAnswer === question.correctAnswer;
  const isWrong = isAnswered && userAnswer !== question.correctAnswer;
  const isUnansweredInReview = mode === 'review' && !isAnswered;

  return (
    <div 
      id={`question-card-${question.id}`}
      className={`bg-white rounded-2xl border transition-all shadow-xs overflow-hidden ${
        mode === 'review'
          ? isCorrect
            ? 'border-emerald-200'
            : isWrong
              ? 'border-red-200 ring-1 ring-red-100'
              : 'border-amber-200'
          : 'border-slate-200'
      }`}
    >
      {/* Top Card Meta Header */}
      <div className="px-5 py-3.5 bg-slate-50/80 border-b border-slate-100 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-bold text-slate-900 text-sm sm:text-base">
            Câu {question.id}
          </span>
          <span className="text-slate-400 text-xs">/ {total}</span>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100">
            {question.category}
          </span>

          {/* Review Mode Badges */}
          {mode === 'review' && (
            <>
              {isCorrect && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Chính xác (+1)
                </span>
              )}
              {isWrong && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-100 text-red-800">
                  <XCircle className="w-3.5 h-3.5" />
                  Sai (0 điểm)
                </span>
              )}
              {isUnansweredInReview && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  Chưa trả lời
                </span>
              )}
            </>
          )}
        </div>

        {/* Flag Button */}
        {onToggleFlag && (
          <button
            type="button"
            onClick={onToggleFlag}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
              isFlagged 
                ? 'bg-amber-100 text-amber-800 font-semibold hover:bg-amber-200' 
                : 'text-slate-500 hover:text-slate-800 hover:bg-slate-200/60'
            }`}
            title={isFlagged ? 'Bỏ đánh dấu câu này' : 'Đánh dấu câu này để xem lại'}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isFlagged ? 'fill-amber-600 text-amber-600' : 'text-slate-400'}`} />
            <span className="hidden sm:inline">{isFlagged ? 'Đã đánh dấu' : 'Đánh dấu'}</span>
          </button>
        )}
      </div>

      {/* Question Statement */}
      <div className="p-5 sm:p-6">
        <p className="text-slate-900 text-base sm:text-lg font-medium leading-relaxed mb-6 select-text">
          {question.question}
        </p>

        {/* Options List */}
        <div className="space-y-3">
          {question.options.map((optionText, optIdx) => {
            const isSelected = userAnswer === optIdx;
            const isThisCorrect = question.correctAnswer === optIdx;

            // Compute styling according to mode
            let optionStyles = 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/60 text-slate-800';
            let labelBadgeStyles = 'bg-slate-100 text-slate-700 border-slate-200';

            if (mode === 'testing') {
              if (isSelected) {
                optionStyles = 'border-emerald-500 bg-emerald-50/60 text-emerald-950 font-medium ring-2 ring-emerald-500/20';
                labelBadgeStyles = 'bg-emerald-600 text-white border-emerald-600 font-bold';
              }
            } else if (mode === 'review') {
              if (isThisCorrect) {
                // Correct option is always green
                optionStyles = 'border-emerald-400 bg-emerald-50/80 text-emerald-950 font-medium ring-2 ring-emerald-500/20';
                labelBadgeStyles = 'bg-emerald-600 text-white border-emerald-600 font-bold';
              } else if (isSelected && !isThisCorrect) {
                // User picked wrong option
                optionStyles = 'border-red-300 bg-red-50/80 text-red-950 font-medium ring-2 ring-red-500/20';
                labelBadgeStyles = 'bg-red-600 text-white border-red-600 font-bold';
              } else {
                optionStyles = 'border-slate-200 bg-slate-50/30 text-slate-600 opacity-80';
              }
            }

            return (
              <label
                key={optIdx}
                id={`q${question.id}-option-${OPTION_LABELS[optIdx]}`}
                onClick={() => {
                  if (mode === 'testing' && onSelectOption) {
                    onSelectOption(optIdx);
                  }
                }}
                className={`flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl border transition-all ${
                  mode === 'testing' ? 'cursor-pointer active:scale-[0.995]' : 'cursor-default'
                } ${optionStyles}`}
              >
                {/* Option Letter Badge (A, B, C, D) */}
                <div
                  className={`w-7 h-7 rounded-lg border flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${labelBadgeStyles}`}
                >
                  {OPTION_LABELS[optIdx]}
                </div>

                {/* Option Content Text */}
                <div className="flex-1 min-w-0 pt-0.5 text-sm sm:text-base leading-snug">
                  {optionText}
                </div>

                {/* Status Indicator Icon in Review Mode */}
                {mode === 'review' && (
                  <div className="shrink-0 pt-0.5">
                    {isThisCorrect && (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {isSelected ? 'Lựa chọn của bạn (Đúng)' : 'Đáp án đúng'}
                      </span>
                    )}
                    {isSelected && !isThisCorrect && (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded-full">
                        <XCircle className="w-3.5 h-3.5" />
                        Lựa chọn của bạn (Sai)
                      </span>
                    )}
                  </div>
                )}
              </label>
            );
          })}
        </div>

        {/* Clear Option Button in testing mode */}
        {mode === 'testing' && isAnswered && onClearOption && (
          <div className="mt-4 flex justify-end">
            <button
              type="button"
              onClick={onClearOption}
              className="text-xs text-slate-500 hover:text-slate-800 underline underline-offset-4 transition-colors"
            >
              Bỏ chọn câu trả lời này
            </button>
          </div>
        )}

        {/* Explanation & Source Section (Shown in Review Mode) */}
        {mode === 'review' && (
          <div className="mt-6 pt-5 border-t border-slate-100">
            <div className="rounded-xl bg-slate-50 p-4 border border-slate-200">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                <HelpCircle className="w-4 h-4 text-emerald-600" />
                <span>Đáp án: <b>{OPTION_LABELS[question.correctAnswer]}</b> • Lời giải & Giải thích chi tiết</span>
              </div>
              
              <p className="text-sm text-slate-800 leading-relaxed mb-3 font-normal">
                {question.explanation}
              </p>

              <div className="flex items-center gap-1.5 text-xs text-slate-500 italic pt-2 border-t border-slate-200/80">
                <BookOpen className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Nguồn kiến thức: <b>{question.source}</b> (Bài giảng Hệ Tiêu hóa - ĐHYD TP.HCM)</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
