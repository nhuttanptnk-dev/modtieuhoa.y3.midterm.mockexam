import React from 'react';
import { AlertCircle, CheckCircle2, Bookmark, ArrowRight, X } from 'lucide-react';

interface SubmitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  totalQuestions: number;
  answeredCount: number;
  flaggedCount: number;
}

export const SubmitModal: React.FC<SubmitModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  totalQuestions,
  answeredCount,
  flaggedCount,
}) => {
  if (!isOpen) return null;

  const unansweredCount = totalQuestions - answeredCount;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity" 
        onClick={onClose}
      />

      {/* Dialog Box */}
      <div className="relative bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl z-10 border border-slate-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">Xác nhận nộp bài thi</h3>
            <p className="text-xs text-slate-500">Bạn chuẩn bị kết thúc bài thi GK Tiêu Hóa</p>
          </div>
        </div>

        {/* Breakdown Card */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-5 space-y-2.5 text-sm">
          <div className="flex justify-between items-center text-slate-700">
            <span>Số câu đã trả lời:</span>
            <span className="font-bold text-emerald-600">{answeredCount} / {totalQuestions}</span>
          </div>

          <div className="flex justify-between items-center text-slate-700">
            <span>Số câu chưa trả lời:</span>
            <span className={`font-bold ${unansweredCount > 0 ? 'text-amber-600' : 'text-slate-600'}`}>
              {unansweredCount} câu
            </span>
          </div>

          {flaggedCount > 0 && (
            <div className="flex justify-between items-center text-slate-700">
              <span>Số câu đang đánh dấu xem lại:</span>
              <span className="font-bold text-indigo-600 flex items-center gap-1">
                <Bookmark className="w-3.5 h-3.5 fill-indigo-500" />
                {flaggedCount} câu
              </span>
            </div>
          )}
        </div>

        {unansweredCount > 0 ? (
          <p className="text-xs text-amber-800 bg-amber-50 border border-amber-200 rounded-lg p-3 mb-6">
            Lưu ý: Bạn còn <b>{unansweredCount} câu chưa làm</b>. Các câu chưa trả lời sẽ nhận 0 điểm khi nộp.
          </p>
        ) : (
          <p className="text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-lg p-3 mb-6">
            Bạn đã hoàn thành trả lời toàn bộ 70 câu hỏi! Hệ thống sẽ chấm điểm và hiển thị đáp án giải thích ngay sau khi nộp.
          </p>
        )}

        <div className="flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-100 transition-colors"
          >
            Quay lại làm tiếp
          </button>
          <button
            id="btn-confirm-submit"
            type="button"
            onClick={() => {
              onClose();
              onConfirm();
            }}
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-xs transition-colors flex items-center gap-2"
          >
            <span>Nộp bài ngay</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
