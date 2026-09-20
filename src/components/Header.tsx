import React from 'react';
import { ExamMode } from '../types';
import { Clock, LayoutGrid, Bookmark, Send, RotateCcw, Award } from 'lucide-react';

interface HeaderProps {
  mode: ExamMode;
  timeLeft: number | null; // in seconds, null if untimed
  totalQuestions: number;
  answeredCount: number;
  flaggedCount: number;
  onOpenPalette: () => void;
  onRequestSubmit: () => void;
  onRetake: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  mode,
  timeLeft,
  totalQuestions,
  answeredCount,
  flaggedCount,
  onOpenPalette,
  onRequestSubmit,
  onRetake,
}) => {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const isLowTime = timeLeft !== null && timeLeft <= 300; // <= 5 minutes
  const isCriticalTime = timeLeft !== null && timeLeft <= 60; // <= 1 minute

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Left: App Title & Progress */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
            Y3
          </div>
          <div className="min-w-0">
            <h1 className="text-sm sm:text-base font-bold text-slate-900 truncate">
              GK Tiêu Hóa (70 câu)
            </h1>
            <div className="text-xs text-slate-500 flex items-center gap-2">
              <span>Đã làm: <b className="text-slate-800 font-semibold">{answeredCount}/{totalQuestions}</b></span>
              {flaggedCount > 0 && (
                <span className="hidden sm:inline-flex items-center text-amber-600 font-medium gap-1">
                  • <Bookmark className="w-3 h-3 fill-amber-500 text-amber-500 inline" /> {flaggedCount} đánh dấu
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Center: Countdown Timer (Only in testing mode) */}
        {mode === 'testing' && timeLeft !== null && (
          <div 
            id="exam-timer"
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-sm font-mono font-bold tracking-tight transition-all shadow-2xs ${
              isCriticalTime 
                ? 'bg-red-50 text-red-600 border-red-300 animate-pulse'
                : isLowTime
                  ? 'bg-amber-50 text-amber-700 border-amber-300'
                  : 'bg-slate-100 text-slate-800 border-slate-200'
            }`}
          >
            <Clock className={`w-4 h-4 ${isCriticalTime ? 'text-red-600' : isLowTime ? 'text-amber-600' : 'text-slate-500'}`} />
            <span>{formatTime(timeLeft)}</span>
          </div>
        )}

        {/* Right: Actions */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Palette button */}
          <button
            id="btn-open-palette"
            onClick={onOpenPalette}
            className="flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 rounded-lg transition-colors"
            title="Mở danh sách tất cả 70 câu hỏi"
          >
            <LayoutGrid className="w-4 h-4 text-slate-600" />
            <span className="hidden sm:inline">Bảng câu hỏi</span>
            <span className="bg-slate-200 text-slate-700 text-xs px-1.5 py-0.5 rounded-full font-bold">
              {answeredCount}/{totalQuestions}
            </span>
          </button>

          {/* Testing mode: Submit button */}
          {mode === 'testing' && (
            <button
              id="btn-submit-exam"
              onClick={onRequestSubmit}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-xs transition-colors"
            >
              <Send className="w-4 h-4" />
              <span>Nộp bài</span>
            </button>
          )}

          {/* Review mode: Retake or Retake wrong button */}
          {mode === 'review' && (
            <button
              id="btn-retake-exam"
              onClick={onRetake}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-xs transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Làm lại</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
