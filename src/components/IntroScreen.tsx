import React from 'react';
import { EXAM_METADATA } from '../data/examData';
import { Category } from '../types';
import { Clock, BookOpen, CheckCircle, Award, AlertCircle, ArrowRight, Shuffle, RotateCcw } from 'lucide-react';

interface IntroScreenProps {
  onStartExam: (shuffle: boolean, timed: boolean) => void;
  savedAttemptScore?: number | null;
  categoryCounts: Record<Category, number>;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({
  onStartExam,
  savedAttemptScore,
  categoryCounts
}) => {
  const [isTimed, setIsTimed] = React.useState(true);
  const [isShuffled, setIsShuffled] = React.useState(false);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Top Banner / University Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3 border border-emerald-200">
          <BookOpen className="w-3.5 h-3.5" />
          {EXAM_METADATA.subtitle}
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-2">
          {EXAM_METADATA.title}
        </h1>
        <p className="text-slate-600 text-sm sm:text-base font-medium">
          Hệ thống kiểm tra trực tuyến • Chấm điểm tức thì • Xem chi tiết đáp án & giải thích
        </p>
      </div>

      {/* Info Notice Box from original test paper */}
      <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-4 sm:p-5 mb-8 text-slate-800 text-sm leading-relaxed shadow-xs">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-amber-950">Thông tin đề thi: </span>
            {EXAM_METADATA.notice}
          </div>
        </div>
      </div>

      {/* Key Metric Highlights */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
        <div className="bg-white border border-slate-200 rounded-xl p-4 text-center shadow-xs">
          <div className="text-slate-500 text-xs font-medium mb-1">Số lượng câu hỏi</div>
          <div className="text-2xl sm:text-3xl font-bold text-slate-900">{EXAM_METADATA.totalQuestions}</div>
          <div className="text-slate-400 text-xs mt-1">Trắc nghiệm 4 lựa chọn</div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 text-center shadow-xs">
          <div className="text-slate-500 text-xs font-medium mb-1">Thời gian làm bài</div>
          <div className="text-2xl sm:text-3xl font-bold text-slate-900">{EXAM_METADATA.durationMinutes}'</div>
          <div className="text-slate-400 text-xs mt-1">~34 giây / câu</div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 text-center shadow-xs">
          <div className="text-slate-500 text-xs font-medium mb-1">Thang điểm chuẩn</div>
          <div className="text-2xl sm:text-3xl font-bold text-slate-900">10.0</div>
          <div className="text-slate-400 text-xs mt-1">Đạt khi &ge; 5.0 đ</div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 text-center shadow-xs">
          <div className="text-slate-500 text-xs font-medium mb-1">Lần thi gần nhất</div>
          <div className="text-2xl sm:text-3xl font-bold text-emerald-600">
            {savedAttemptScore !== null && savedAttemptScore !== undefined 
              ? `${savedAttemptScore.toFixed(1)}/10` 
              : 'Chưa thi'}
          </div>
          <div className="text-slate-400 text-xs mt-1">Lưu trữ trình duyệt</div>
        </div>
      </div>

      {/* Exam Structure Breakdown */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 mb-8 shadow-xs">
        <h2 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Award className="w-4 h-4 text-indigo-600" />
          Cấu trúc ma trận 70 câu hỏi theo học phần
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 text-sm">
          {Object.entries(categoryCounts).map(([cat, count]) => (
            <div key={cat} className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
              <span className="font-medium text-slate-700 truncate pr-2 text-xs sm:text-sm">{cat}</span>
              <span className="bg-white border border-slate-200 text-slate-900 text-xs font-bold px-2 py-0.5 rounded-full shrink-0">
                {count} câu
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Mode settings */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 mb-8 shadow-xs">
        <h2 className="text-base font-bold text-slate-900 mb-4">Tùy chọn thi & luyện tập</h2>
        <div className="space-y-4">
          <label className="flex items-start sm:items-center justify-between gap-4 p-3 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-slate-900 text-sm">Chế độ thi tính giờ (40 phút)</div>
                <div className="text-slate-500 text-xs">Mô phỏng áp lực phòng thi thật, đồng hồ đếm ngược và tự động thu bài</div>
              </div>
            </div>
            <input 
              type="checkbox" 
              checked={isTimed} 
              onChange={(e) => setIsTimed(e.target.checked)}
              className="w-5 h-5 rounded text-blue-600 focus:ring-blue-500 border-slate-300 mt-1 sm:mt-0"
            />
          </label>

          <label className="flex items-start sm:items-center justify-between gap-4 p-3 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                <Shuffle className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-slate-900 text-sm">Xáo trộn thứ tự câu hỏi</div>
                <div className="text-slate-500 text-xs">Ngẫu nhiên thứ tự các câu hỏi để rèn luyện khả năng phản xạ kiến thức</div>
              </div>
            </div>
            <input 
              type="checkbox" 
              checked={isShuffled} 
              onChange={(e) => setIsShuffled(e.target.checked)}
              className="w-5 h-5 rounded text-purple-600 focus:ring-purple-500 border-slate-300 mt-1 sm:mt-0"
            />
          </label>
        </div>
      </div>

      {/* Start Button */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          id="btn-start-exam"
          onClick={() => onStartExam(isShuffled, isTimed)}
          className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold rounded-xl shadow-sm hover:shadow transition-all flex items-center justify-center gap-3 text-base"
        >
          <CheckCircle className="w-5 h-5" />
          <span>Bắt đầu làm bài thi ngay</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      <div className="mt-8 text-center text-xs text-slate-400">
        Đề thi được số hóa đầy đủ 70 câu hỏi và lời giải chi tiết chuẩn y khoa theo tài liệu giảng dạy ĐHYD TP.HCM.
      </div>
    </div>
  );
};
