"use client";

import { Fingerprint, Users } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { useLanguage } from "@/components/language-provider";
import SectionHeading from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Student = {
  _id: string;
  fullName: string;
  schoolId: string;
  grade?: string;
  section?: string;
  guardianName?: string;
  phone?: string;
  fingerprintId?: string;
};

type Teacher = {
  _id: string;
  fullName: string;
  schoolId: string;
  designation?: string;
  subject?: string;
  phone?: string;
  fingerprintId?: string;
};

type AttendanceEntry = {
  _id: string;
  schoolId: string;
  fingerprintId: string;
  recordedAt: string;
  student?: {
    fullName?: string;
    schoolId?: string;
    grade?: string;
    section?: string;
  };
};

export default function AdminPage() {
  const { language } = useLanguage();
  const content = useMemo(
    () =>
      ({
        bn: {
          badge: "অ্যাডমিন",
          title: "শিক্ষার্থী, শিক্ষক ও উপস্থিতি ব্যবস্থাপনা",
          subtitle:
            "শিক্ষার্থী ও শিক্ষক নিবন্ধন, তথ্য হালনাগাদ এবং ফিঙ্গারপ্রিন্ট উপস্থিতি রেকর্ড করুন।",
          summaryHeading: "সংক্ষিপ্ত চিত্র",
          summarySubtitle: "বর্তমান শিক্ষার্থী, শিক্ষক ও উপস্থিতির সংখ্যা।",
          summary: {
            students: "শিক্ষার্থী",
            teachers: "শিক্ষক",
            attendance: "সাম্প্রতিক উপস্থিতি",
          },
          labels: {
            studentId: "শিক্ষার্থী আইডি",
            teacherId: "শিক্ষক আইডি",
            grade: "শ্রেণি",
            section: "শাখা",
            guardian: "অভিভাবক",
            phone: "মোবাইল",
            designation: "পদবি",
            subject: "বিষয়",
            fingerprint: "ফিঙ্গারপ্রিন্ট আইডি",
          },
          actions: {
            save: "সংরক্ষণ",
            update: "আপডেট",
            cancel: "বাতিল",
            edit: "সম্পাদনা",
            remove: "মুছুন",
          },
          students: {
            heading: "শিক্ষার্থী তালিকা",
            subtitle: "নতুন শিক্ষার্থী যোগ করুন এবং প্রয়োজন হলে তথ্য পরিবর্তন করুন।",
            formTitle: "শিক্ষার্থী নিবন্ধন",
            empty: "এখনো কোনো শিক্ষার্থী নেই।",
          },
          teachers: {
            heading: "শিক্ষক তালিকা",
            subtitle: "শিক্ষক যোগ করুন এবং প্রোফাইল আপডেট করুন।",
            formTitle: "শিক্ষক নিবন্ধন",
            empty: "এখনো কোনো শিক্ষক নেই।",
          },
          attendance: {
            heading: "উপস্থিতি (ফিঙ্গারপ্রিন্ট)",
            subtitle: "শিক্ষার্থীর আইডি ও ফিঙ্গারপ্রিন্ট আইডি দিয়ে উপস্থিতি নিন।",
            submit: "উপস্থিতি নিন",
            recent: "সাম্প্রতিক উপস্থিতি",
            empty: "এখনো কোনো উপস্থিতি নেই।",
          },
          placeholders: {
            studentName: "শিক্ষার্থীর নাম",
            studentId: "শিক্ষার্থী আইডি",
            grade: "শ্রেণি",
            section: "শাখা",
            guardian: "অভিভাবকের নাম",
            phone: "মোবাইল নম্বর",
            fingerprint: "ফিঙ্গারপ্রিন্ট আইডি",
            teacherName: "শিক্ষকের নাম",
            teacherId: "শিক্ষক আইডি",
            designation: "পদবি",
            subject: "বিষয়",
          },
        },
        en: {
          badge: "Admin",
          title: "Manage students, teachers, and attendance",
          subtitle:
            "Register users, update profiles, and record fingerprint attendance.",
          summaryHeading: "Quick overview",
          summarySubtitle: "Current counts of students, teachers, and attendance.",
          summary: {
            students: "Students",
            teachers: "Teachers",
            attendance: "Recent attendance",
          },
          labels: {
            studentId: "Student ID",
            teacherId: "Teacher ID",
            grade: "Grade",
            section: "Section",
            guardian: "Guardian",
            phone: "Phone",
            designation: "Designation",
            subject: "Subject",
            fingerprint: "Fingerprint ID",
          },
          actions: {
            save: "Save",
            update: "Update",
            cancel: "Cancel",
            edit: "Edit",
            remove: "Delete",
          },
          students: {
            heading: "Students",
            subtitle: "Register new students and update existing profiles.",
            formTitle: "Student registration",
            empty: "No students yet.",
          },
          teachers: {
            heading: "Teachers",
            subtitle: "Add teachers and keep their profiles up to date.",
            formTitle: "Teacher registration",
            empty: "No teachers yet.",
          },
          attendance: {
            heading: "Attendance (Fingerprint)",
            subtitle: "Record attendance using student ID and fingerprint ID.",
            submit: "Mark attendance",
            recent: "Recent attendance",
            empty: "No attendance recorded yet.",
          },
          placeholders: {
            studentName: "Student name",
            studentId: "Student ID",
            grade: "Grade",
            section: "Section",
            guardian: "Guardian name",
            phone: "Phone number",
            fingerprint: "Fingerprint ID",
            teacherName: "Teacher name",
            teacherId: "Teacher ID",
            designation: "Designation",
            subject: "Subject",
          },
        },
      } as const)[language],
    [language]
  );
  const passwordPlaceholder =
    (content.placeholders as Record<string, string>).password ??
    (language === "bn" ? "পাসওয়ার্ড" : "Password");

  const [students, setStudents] = useState<Student[]>([]);
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [attendance, setAttendance] = useState<AttendanceEntry[]>([]);
  const [studentForm, setStudentForm] = useState({
    fullName: "",
    schoolId: "",
    grade: "",
    section: "",
    guardianName: "",
    phone: "",
    fingerprintId: "",
    password: "",
  });
  const [teacherForm, setTeacherForm] = useState({
    fullName: "",
    schoolId: "",
    designation: "",
    subject: "",
    phone: "",
    fingerprintId: "",
    password: "",
  });
  const [attendanceForm, setAttendanceForm] = useState({
    schoolId: "",
    fingerprintId: "",
  });
  const [editingStudentId, setEditingStudentId] = useState<string | null>(null);
  const [editingTeacherId, setEditingTeacherId] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const loadStudents = async () => {
    const response = await fetch("/api/students");
    const data = await response.json();
    setStudents(data.students ?? []);
  };

  const loadTeachers = async () => {
    const response = await fetch("/api/teachers");
    const data = await response.json();
    setTeachers(data.teachers ?? []);
  };

  const loadAttendance = async () => {
    const response = await fetch("/api/attendance?limit=10");
    const data = await response.json();
    setAttendance(data.attendance ?? []);
  };

  const refreshAll = async () => {
    await Promise.all([loadStudents(), loadTeachers(), loadAttendance()]);
  };

  useEffect(() => {
    void refreshAll();
  }, []);

  const handleStudentSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSaving(true);
    setStatusMessage(null);
    const method = editingStudentId ? "PATCH" : "POST";
    const url = editingStudentId
      ? `/api/students/${editingStudentId}`
      : "/api/students";

    const studentPayload: Record<string, string> = { ...studentForm };
    if (!studentPayload.password) {
      delete studentPayload.password;
    }

    const response = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(studentPayload),
    });

    if (!response.ok) {
      const data = await response.json();
      setStatusMessage(data.error ?? "Unable to save student.");
      setIsSaving(false);
      return;
    }

    setStudentForm({
      fullName: "",
      schoolId: "",
      grade: "",
      section: "",
      guardianName: "",
      phone: "",
      fingerprintId: "",
      password: "",
    });
    setEditingStudentId(null);
    await loadStudents();
    setIsSaving(false);
  };

  const handleTeacherSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSaving(true);
    setStatusMessage(null);
    const method = editingTeacherId ? "PATCH" : "POST";
    const url = editingTeacherId
      ? `/api/teachers/${editingTeacherId}`
      : "/api/teachers";

    const teacherPayload: Record<string, string> = { ...teacherForm };
    if (!teacherPayload.password) {
      delete teacherPayload.password;
    }

    const response = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(teacherPayload),
    });

    if (!response.ok) {
      const data = await response.json();
      setStatusMessage(data.error ?? "Unable to save teacher.");
      setIsSaving(false);
      return;
    }

    setTeacherForm({
      fullName: "",
      schoolId: "",
      designation: "",
      subject: "",
      phone: "",
      fingerprintId: "",
      password: "",
    });
    setEditingTeacherId(null);
    await loadTeachers();
    setIsSaving(false);
  };

  const handleAttendanceSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSaving(true);
    setStatusMessage(null);
    const response = await fetch("/api/attendance", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(attendanceForm),
    });

    if (!response.ok) {
      const data = await response.json();
      setStatusMessage(data.error ?? "Unable to record attendance.");
      setIsSaving(false);
      return;
    }

    setAttendanceForm({ schoolId: "", fingerprintId: "" });
    await loadAttendance();
    setIsSaving(false);
  };

  const startEditStudent = (student: Student) => {
    setEditingStudentId(student._id);
    setStudentForm({
      fullName: student.fullName ?? "",
      schoolId: student.schoolId ?? "",
      grade: student.grade ?? "",
      section: student.section ?? "",
      guardianName: student.guardianName ?? "",
      phone: student.phone ?? "",
      fingerprintId: student.fingerprintId ?? "",
      password: "",
    });
  };

  const startEditTeacher = (teacher: Teacher) => {
    setEditingTeacherId(teacher._id);
    setTeacherForm({
      fullName: teacher.fullName ?? "",
      schoolId: teacher.schoolId ?? "",
      designation: teacher.designation ?? "",
      subject: teacher.subject ?? "",
      phone: teacher.phone ?? "",
      fingerprintId: teacher.fingerprintId ?? "",
      password: "",
    });
  };

  const cancelStudentEdit = () => {
    setEditingStudentId(null);
    setStudentForm({
      fullName: "",
      schoolId: "",
      grade: "",
      section: "",
      guardianName: "",
      phone: "",
      fingerprintId: "",
      password: "",
    });
  };

  const cancelTeacherEdit = () => {
    setEditingTeacherId(null);
    setTeacherForm({
      fullName: "",
      schoolId: "",
      designation: "",
      subject: "",
      phone: "",
      fingerprintId: "",
      password: "",
    });
  };

  const removeStudent = async (id: string) => {
    setIsSaving(true);
    setStatusMessage(null);
    const response = await fetch(`/api/students/${id}`, { method: "DELETE" });
    if (!response.ok) {
      const data = await response.json();
      setStatusMessage(data.error ?? "Unable to delete student.");
      setIsSaving(false);
      return;
    }
    await loadStudents();
    setIsSaving(false);
  };

  const removeTeacher = async (id: string) => {
    setIsSaving(true);
    setStatusMessage(null);
    const response = await fetch(`/api/teachers/${id}`, { method: "DELETE" });
    if (!response.ok) {
      const data = await response.json();
      setStatusMessage(data.error ?? "Unable to delete teacher.");
      setIsSaving(false);
      return;
    }
    await loadTeachers();
    setIsSaving(false);
  };

  const summary = {
    students: students.length,
    teachers: teachers.length,
    attendance: attendance.length,
  };

  return (
    <div className="space-y-12 page-gutter py-12 md:py-16">
      <div className="mx-auto max-w-screen-2xl space-y-6">
        <Badge variant="warn">{content.badge}</Badge>
        <h1 className="text-4xl font-semibold text-[var(--color-ink)] md:text-5xl">
          {content.title}
        </h1>
        <p className="text-base text-[var(--color-muted)] md:text-lg">
          {content.subtitle}
        </p>
        {statusMessage ? (
          <p className="text-sm text-red-600">{statusMessage}</p>
        ) : null}
      </div>

      <div className="mx-auto max-w-screen-2xl space-y-8">
        <SectionHeading
          title={content.summaryHeading}
          subtitle={content.summarySubtitle}
        />
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <Users className="h-6 w-6 text-[var(--color-blue-700)]" />
              <CardTitle className="text-base">
                {content.summary.students}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-2xl font-semibold text-[var(--color-ink)]">
              {summary.students}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Users className="h-6 w-6 text-[var(--color-blue-700)]" />
              <CardTitle className="text-base">
                {content.summary.teachers}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-2xl font-semibold text-[var(--color-ink)]">
              {summary.teachers}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Fingerprint className="h-6 w-6 text-[var(--color-blue-700)]" />
              <CardTitle className="text-base">
                {content.summary.attendance}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-2xl font-semibold text-[var(--color-ink)]">
              {summary.attendance}
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mx-auto max-w-screen-2xl space-y-8">
        <SectionHeading
          title={content.students.heading}
          subtitle={content.students.subtitle}
        />
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Card>
            <CardHeader>
              <CardTitle>{content.students.formTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleStudentSubmit}>
                <div className="grid gap-4 md:grid-cols-2">
                  <Input
                    placeholder={content.placeholders.studentName}
                    value={studentForm.fullName}
                    onChange={(event) =>
                      setStudentForm((prev) => ({
                        ...prev,
                        fullName: event.target.value,
                      }))
                    }
                    required
                  />
                  <Input
                    placeholder={content.placeholders.studentId}
                    value={studentForm.schoolId}
                    onChange={(event) =>
                      setStudentForm((prev) => ({
                        ...prev,
                        schoolId: event.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <Input
                    placeholder={content.placeholders.grade}
                    value={studentForm.grade}
                    onChange={(event) =>
                      setStudentForm((prev) => ({
                        ...prev,
                        grade: event.target.value,
                      }))
                    }
                    required
                  />
                  <Input
                    placeholder={content.placeholders.section}
                    value={studentForm.section}
                    onChange={(event) =>
                      setStudentForm((prev) => ({
                        ...prev,
                        section: event.target.value,
                      }))
                    }
                  />
                </div>
                <Input
                  placeholder={content.placeholders.guardian}
                  value={studentForm.guardianName}
                  onChange={(event) =>
                    setStudentForm((prev) => ({
                      ...prev,
                      guardianName: event.target.value,
                    }))
                  }
                />
                <div className="grid gap-4 md:grid-cols-2">
                  <Input
                    placeholder={content.placeholders.phone}
                    value={studentForm.phone}
                    onChange={(event) =>
                      setStudentForm((prev) => ({
                        ...prev,
                        phone: event.target.value,
                      }))
                    }
                  />
                  <Input
                    placeholder={content.placeholders.fingerprint}
                    value={studentForm.fingerprintId}
                    onChange={(event) =>
                      setStudentForm((prev) => ({
                        ...prev,
                        fingerprintId: event.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <Input
                  placeholder={passwordPlaceholder}
                  type="password"
                  value={studentForm.password}
                  onChange={(event) =>
                    setStudentForm((prev) => ({
                      ...prev,
                      password: event.target.value,
                    }))
                  }
                  required={!editingStudentId}
                />
                <div className="flex flex-wrap gap-3">
                  <Button type="submit" variant="gold" disabled={isSaving}>
                    {editingStudentId
                      ? content.actions.update
                      : content.actions.save}
                  </Button>
                  {editingStudentId ? (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={cancelStudentEdit}
                      disabled={isSaving}
                    >
                      {content.actions.cancel}
                    </Button>
                  ) : null}
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {students.length === 0 ? (
              <Card>
                <CardContent className="py-6 text-sm text-[var(--color-muted)]">
                  {content.students.empty}
                </CardContent>
              </Card>
            ) : (
              students.map((student) => (
                <Card key={student._id}>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {student.fullName}
                    </CardTitle>
                    <p className="text-xs text-[var(--color-muted)]">
                      {content.labels.studentId}: {student.schoolId}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-[var(--color-muted)]">
                    <p>
                      {content.labels.grade}: {student.grade ?? "-"}
                    </p>
                    <p>
                      {content.labels.section}: {student.section ?? "-"}
                    </p>
                    <p>
                      {content.labels.guardian}: {student.guardianName ?? "-"}
                    </p>
                    <p>
                      {content.labels.phone}: {student.phone ?? "-"}
                    </p>
                    <p>
                      {content.labels.fingerprint}: {student.fingerprintId ?? "-"}
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                      <Button
                        type="button"
                        size="sm"
                        variant="outline"
                        onClick={() => startEditStudent(student)}
                        disabled={isSaving}
                      >
                        {content.actions.edit}
                      </Button>
                      <Button
                        type="button"
                        size="sm"
                        variant="outline"
                        className="text-red-600"
                        onClick={() => removeStudent(student._id)}
                        disabled={isSaving}
                      >
                        {content.actions.remove}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-screen-2xl space-y-8">
        <SectionHeading
          title={content.teachers.heading}
          subtitle={content.teachers.subtitle}
        />
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Card>
            <CardHeader>
              <CardTitle>{content.teachers.formTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleTeacherSubmit}>
                <div className="grid gap-4 md:grid-cols-2">
                  <Input
                    placeholder={content.placeholders.teacherName}
                    value={teacherForm.fullName}
                    onChange={(event) =>
                      setTeacherForm((prev) => ({
                        ...prev,
                        fullName: event.target.value,
                      }))
                    }
                    required
                  />
                  <Input
                    placeholder={content.placeholders.teacherId}
                    value={teacherForm.schoolId}
                    onChange={(event) =>
                      setTeacherForm((prev) => ({
                        ...prev,
                        schoolId: event.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <Input
                    placeholder={content.placeholders.designation}
                    value={teacherForm.designation}
                    onChange={(event) =>
                      setTeacherForm((prev) => ({
                        ...prev,
                        designation: event.target.value,
                      }))
                    }
                    required
                  />
                  <Input
                    placeholder={content.placeholders.subject}
                    value={teacherForm.subject}
                    onChange={(event) =>
                      setTeacherForm((prev) => ({
                        ...prev,
                        subject: event.target.value,
                      }))
                    }
                  />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <Input
                    placeholder={content.placeholders.phone}
                    value={teacherForm.phone}
                    onChange={(event) =>
                      setTeacherForm((prev) => ({
                        ...prev,
                        phone: event.target.value,
                      }))
                    }
                  />
                  <Input
                    placeholder={content.placeholders.fingerprint}
                    value={teacherForm.fingerprintId}
                    onChange={(event) =>
                      setTeacherForm((prev) => ({
                        ...prev,
                        fingerprintId: event.target.value,
                      }))
                    }
                  />
                </div>
                <Input
                  placeholder={passwordPlaceholder}
                  type="password"
                  value={teacherForm.password}
                  onChange={(event) =>
                    setTeacherForm((prev) => ({
                      ...prev,
                      password: event.target.value,
                    }))
                  }
                  required={!editingTeacherId}
                />
                <div className="flex flex-wrap gap-3">
                  <Button type="submit" variant="gold" disabled={isSaving}>
                    {editingTeacherId
                      ? content.actions.update
                      : content.actions.save}
                  </Button>
                  {editingTeacherId ? (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={cancelTeacherEdit}
                      disabled={isSaving}
                    >
                      {content.actions.cancel}
                    </Button>
                  ) : null}
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {teachers.length === 0 ? (
              <Card>
                <CardContent className="py-6 text-sm text-[var(--color-muted)]">
                  {content.teachers.empty}
                </CardContent>
              </Card>
            ) : (
              teachers.map((teacher) => (
                <Card key={teacher._id}>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {teacher.fullName}
                    </CardTitle>
                    <p className="text-xs text-[var(--color-muted)]">
                      {content.labels.teacherId}: {teacher.schoolId}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-[var(--color-muted)]">
                    <p>
                      {content.labels.designation}: {teacher.designation ?? "-"}
                    </p>
                    <p>
                      {content.labels.subject}: {teacher.subject ?? "-"}
                    </p>
                    <p>
                      {content.labels.phone}: {teacher.phone ?? "-"}
                    </p>
                    <p>
                      {content.labels.fingerprint}: {teacher.fingerprintId ?? "-"}
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                      <Button
                        type="button"
                        size="sm"
                        variant="outline"
                        onClick={() => startEditTeacher(teacher)}
                        disabled={isSaving}
                      >
                        {content.actions.edit}
                      </Button>
                      <Button
                        type="button"
                        size="sm"
                        variant="outline"
                        className="text-red-600"
                        onClick={() => removeTeacher(teacher._id)}
                        disabled={isSaving}
                      >
                        {content.actions.remove}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-screen-2xl space-y-8">
        <SectionHeading
          title={content.attendance.heading}
          subtitle={content.attendance.subtitle}
        />
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Card>
            <CardHeader>
              <CardTitle>{content.attendance.heading}</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleAttendanceSubmit}>
                <Input
                  placeholder={content.placeholders.studentId}
                  value={attendanceForm.schoolId}
                  onChange={(event) =>
                    setAttendanceForm((prev) => ({
                      ...prev,
                      schoolId: event.target.value,
                    }))
                  }
                  required
                />
                <Input
                  placeholder={content.placeholders.fingerprint}
                  value={attendanceForm.fingerprintId}
                  onChange={(event) =>
                    setAttendanceForm((prev) => ({
                      ...prev,
                      fingerprintId: event.target.value,
                    }))
                  }
                  required
                />
                <Button type="submit" variant="gold" disabled={isSaving}>
                  {content.attendance.submit}
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{content.attendance.recent}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-[var(--color-muted)]">
              {attendance.length === 0 ? (
                <p>{content.attendance.empty}</p>
              ) : (
                attendance.map((entry) => {
                  const studentName = entry.student?.fullName ?? "-";
                  const recordedAt = new Date(entry.recordedAt);
                  const dateLabel = Number.isNaN(recordedAt.getTime())
                    ? entry.recordedAt
                    : recordedAt.toLocaleString(
                        language === "bn" ? "bn-BD" : "en-BD",
                        {
                          dateStyle: "medium",
                          timeStyle: "short",
                        }
                      );

                  return (
                    <div
                      key={entry._id}
                      className="flex items-start justify-between rounded-2xl border border-[var(--color-line)] bg-[var(--color-white)] px-4 py-3"
                    >
                      <div>
                        <p className="font-semibold text-[var(--color-ink)]">
                          {studentName}
                        </p>
                        <p className="text-xs">
                          {content.labels.studentId}: {entry.schoolId}
                        </p>
                      </div>
                      <div className="text-right text-xs">
                        <p>{dateLabel}</p>
                        <p>
                          {content.labels.fingerprint}: {entry.fingerprintId}
                        </p>
                      </div>
                    </div>
                  );
                })
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}




