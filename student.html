<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>لوحة الطالب — ثانوية الشرقاط</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header class="topbar">
    <div class="container">
      <img src="assets/logo.png" alt="logo" class="logo-sm" />
      <h2 id="schoolName">ثانوية الشرقاط للمتفوقين</h2>
      <button id="logoutBtn" class="btn small">خروج</button>
    </div>
  </header>

  <main class="container">
    <section class="student-card card">
      <h3 id="studentName">—</h3>
      <p id="studentGrade">الصف: —</p>

      <div class="tabs">
        <button class="tab-btn active" data-target="exams">الامتحانات</button>
        <button class="tab-btn" data-target="attendance">الحضور والغياب</button>
      </div>

      <div id="exams" class="tab-content">
        <h4>الدرجات</h4>
        <div id="examsTableWrapper"></div>
      </div>

      <div id="attendance" class="tab-content" style="display:none;">
        <h4>سجل الحضور</h4>
        <div id="attendanceTableWrapper"></div>
      </div>
    </section>
  </main>

  <script src="app.js"></script>
  <script>
    // تبويب
    document.querySelectorAll('.tab-btn').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        const target = btn.dataset.target;
        document.querySelectorAll('.tab-content').forEach(c=>c.style.display='none');
        document.getElementById(target).style.display = 'block';
      });
    });

    // خروج
    document.getElementById('logoutBtn').addEventListener('click', ()=>{
      localStorage.removeItem('studentCode');
      window.location.href = 'index.html';
    });

    // تحميل بيانات وعرضها
    (async function(){
      const code = localStorage.getItem('studentCode');
      if(!code){
        window.location.href = 'index.html';
        return;
      }
      try{
        const resp = await fetch('students.json');
        const students = await resp.json();
        const student = students.find(s => String(s.code) === String(code));
        if(!student){
          alert('ماكو طالب بهذا الكود. راجع الإدارة أو جرّب كود ثاني.');
          localStorage.removeItem('studentCode');
          window.location.href = 'index.html';
          return;
        }
        // عرض المعلومات الأساسية
        document.getElementById('studentName').textContent = student.name;
        document.getElementById('studentGrade').textContent = 'الصف: ' + student.grade;

        // عرض الامتحانات — جدول ديناميكي حسب المواد داخل data
        const examsWrapper = document.getElementById('examsTableWrapper');
        if(student.exams && Object.keys(student.exams).length){
          const table = document.createElement('table');
          table.className = 'data-table';
          const thead = document.createElement('thead');
          thead.innerHTML = '<tr><th>المادة</th><th>شهر أول</th><th>شهر ثاني</th><th>نصف السنة</th><th>نهائي</th></tr>';
          table.appendChild(thead);
          const tbody = document.createElement('tbody');
          for(const subject of Object.keys(student.exams)){
            const row = document.createElement('tr');
            const periods = student.exams[subject];
            row.innerHTML = `<td>${subject}</td>
              <td>${periods['month1'] ?? '-'}</td>
              <td>${periods['month2'] ?? '-'}</td>
              <td>${periods['mid'] ?? '-'}</td>
              <td>${periods['final'] ?? '-'}</td>`;
            tbody.appendChild(row);
          }
          table.appendChild(tbody);
          examsWrapper.appendChild(table);
        } else {
          examsWrapper.innerHTML = '<p>لا توجد بيانات درجات لهذا الطالب.</p>';
        }

        // عرض الحضور
        const attWrapper = document.getElementById('attendanceTableWrapper');
        if(student.attendance && Object.keys(student.attendance).length){
          const table = document.createElement('table');
          table.className = 'data-table';
          table.innerHTML = '<thead><tr><th>التاريخ</th><th>الحالة</th></tr></thead>';
          const tbody = document.createElement('tbody');
          // فرز التواريخ تنازليًا
          const dates = Object.keys(student.attendance).sort((a,b)=> b.localeCompare(a));
          for(const d of dates){
            const status = student.attendance[d] === 'present' ? '✅ حاضر' : '❌ غائب';
            const row = document.createElement('tr');
            row.innerHTML = `<td>${d}</td><td>${status}</td>`;
            tbody.appendChild(row);
          }
          table.appendChild(tbody);
          attWrapper.appendChild(table);
        } else {
          attWrapper.innerHTML = '<p>لا توجد سجلات حضور لهذا الطالب.</p>';
        }

      }catch(err){
        console.error(err);
        alert('حدث خطأ بتحميل بيانات الطلبة. تأكد الملف students.json موجود وبنفس المسار.');
      }
    })();
  </script>
</body>
</html>