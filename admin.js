// بيانات تجريبية لوضعها بدل قراءة JSON من السيرفر
let students = JSON.parse(localStorage.getItem('students')) || [
  {"code":"101","name":"علي محمد","grade":"رابع علمي","attendance":{},"exams":{}},
  {"code":"102","name":"ميسان جاسم","grade":"ثالث متوسط","attendance":{},"exams":{}}
];

// تسجيل دخول المدير
const adminUser = "admin";
const adminPass = "1234";

const loginCard = document.getElementById('loginCard');
const dashboard = document.getElementById('adminDashboard');

document.getElementById('adminLoginForm').addEventListener('submit', e=>{
  e.preventDefault();
  const user = document.getElementById('adminUser').value.trim();
  const pass = document.getElementById('adminPass').value.trim();
  if(user === adminUser && pass === adminPass){
    loginCard.style.display = 'none';
    dashboard.style.display = 'block';
    renderStudentsTable();
  }else{
    alert('اسم المستخدم أو كلمة المرور خاطئة');
  }
});

// خروج
document.getElementById('logoutBtn').addEventListener('click', ()=>{
  dashboard.style.display = 'none';
  loginCard.style.display = 'flex';
});

// إضافة طالب جديد
document.getElementById('addStudentForm').addEventListener('submit', e=>{
  e.preventDefault();
  const name = document.getElementById('newName').value.trim();
  const code = document.getElementById('newCode').value.trim();
  const grade = document.getElementById('newGrade').value.trim();
  if(!name || !code || !grade) return;
  students.push({name, code, grade, attendance:{}, exams:{}});
  localStorage.setItem('students', JSON.stringify(students));
  renderStudentsTable();
  e.target.reset();
});

// عرض جدول الطلاب
function renderStudentsTable(){
  const wrapper = document.getElementById('studentsTableWrapper');
  wrapper.innerHTML = '';
  if(!students.length) { wrapper.innerHTML = '<p>لا يوجد طلاب</p>'; return; }

  const table = document.createElement('table');
  table.className = 'data-table';
  table.innerHTML = `<thead>
    <tr><th>الكود</th><th>الاسم</th><th>الصف</th><th>تحكم</th></tr>
  </thead>`;
  const tbody = document.createElement('tbody');

  students.forEach((s, idx)=>{
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${s.code}</td>
      <td>${s.name}</td>
      <td>${s.grade}</td>
      <td>
        <button class="btn small edit" data-idx="${idx}">تعديل</button>
        <button class="btn small" style="background:red" data-idx="${idx}">حذف</button>
      </td>`;
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  wrapper.appendChild(table);

  // أزرار تعديل وحذف
  table.querySelectorAll('button.edit').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const idx = btn.dataset.idx;
      const newName = prompt('اسم الطالب:', students[idx].name);
      const newGrade = prompt('الصف:', students[idx].grade);
      if(newName) students[idx].name = newName;
      if(newGrade) students[idx].grade = newGrade;
      localStorage.setItem('students', JSON.stringify(students));
      renderStudentsTable();
    });
  });

  table.querySelectorAll('button[style*="red"]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const idx = btn.dataset.idx;
      if(confirm('هل تريد حذف هذا الطالب؟')){
        students.splice(idx,1);
        localStorage.setItem('students', JSON.stringify(students));
        renderStudentsTable();
      }
    });
  });
}