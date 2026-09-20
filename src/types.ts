export type Category = 
  | 'GIẢI PHẪU'
  | 'MÔ PHÔI'
  | 'SINH LÝ'
  | 'VI SINH'
  | 'DƯỢC LÝ'
  | 'CHẨN ĐOÁN HÌNH ẢNH'
  | 'GIẢI PHẪU BỆNH'
  | 'CẬN LÂM SÀNG';

export interface Question {
  id: number;
  category: Category;
  question: string;
  options: [string, string, string, string];
  correctAnswer: number; // 0 = A, 1 = B, 2 = C, 3 = D
  explanation: string;
  source: string;
}

export type ExamMode = 'intro' | 'testing' | 'review';

export interface ExamResult {
  totalQuestions: number;
  answeredCount: number;
  correctCount: number;
  wrongCount: number;
  unansweredCount: number;
  scoreOutOf10: number;
  percentage: number;
  timeSpentSeconds: number;
  categoryBreakdown: {
    category: Category;
    total: number;
    correct: number;
    percentage: number;
  }[];
}
