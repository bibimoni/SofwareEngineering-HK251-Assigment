interface Tutor {
  id: number;
  name: string;
  email: string;
  description: string;
  subjects: string[];
}

const mockTutors: Tutor[] = [
  {
    id: 1,
    name: "NGUYỄN ĐỨC TRUNG KIÊN",
    email: "kien.nguyen@hcmut.edu.vn",
    description: "Sinh viên năm 3 ngành Khoa học máy tính thành tích tốt với GPA 3.2, có kinh nghiệm trong giảng dạy.",
    subjects: ["Giải tích 1", "Vật lý 1", "Kĩ thuật lập trình", "DSA"],
  },
  {
    id: 2,
    name: "NGUYỄN ĐỨC TRUNG KIÊN",
    email: "kien.nguyen@hcmut.edu.vn",
    description: "SInh viên ngành Cơ khí hiện đang là năm 4, nếu bạn có vấn đề gì hãy liên hệ ngay cho tôi",
    subjects: ["Giải tích 2", "Vật lý 1", "Sức bền vật liệu", "Vẽ kĩ thuật"],
  },
  {
    id: 3,
    name: "NGUYỄN ĐỨC TRUNG KIÊN",
    email: "kien.nguyen@hcmut.edu.vn",
    description: "SInh viên năm 3 ngành hoá chuyên ngành hoá vô cơ, GPA 4.0 và kinh nghiệm ôn thi nước rút",
    subjects: ["Hoá dầu", "Hoá vô cơ", "Quá trình thiết bị", "Hoá hữu cơ"],
  },
  {
    id: 4,
    name: "NGUYỄN ĐỨC TRUNG KIÊN",
    email: "kien.nguyen@hcmut.edu.vn",
    description: "Sinh viên năm 3 ngành Khoa học máy tính thành tích tốt với GPA 3.2, có kinh nghiệm trong giảng dạy.",
    subjects: ["Giải tích 1", "Vật lý 1", "Kĩ thuật lập trình", "DSA"],
  },
  {
    id: 5,
    name: "NGUYỄN ĐỨC TRUNG KIÊN",
    email: "kien.nguyen@hcmut.edu.vn",
    description: "Sinh viên năm 3 ngành Khoa học máy tính thành tích tốt với GPA 3.2, có kinh nghiệm trong giảng dạy.",
    subjects: ["Giải tích 1", "Vật lý 1", "Kĩ thuật lập trình", "DSA"],
  },
  {
    id: 6,
    name: "NGUYỄN ĐỨC TRUNG KIÊN",
    email: "kien.nguyen@hcmut.edu.vn",
    description: "Sinh viên năm 3 ngành Khoa học máy tính thành tích tốt với GPA 3.2, có kinh nghiệm trong giảng dạy.",
    subjects: ["Giải tích 1", "Vật lý 1", "Kĩ thuật lập trình", "DSA"],
  },
];

export default mockTutors;
