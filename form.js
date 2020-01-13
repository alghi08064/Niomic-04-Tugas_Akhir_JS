function buat_login() {
  var e = document.getElementById("X");
  e.parentElement.removeChild(e);
  var p = document.createElement("P");
  p.className = "tulisan_login";
  p.innerHTML =  "SILAHKAN MENDAFTAR";
  var element = document.getElementsByTagName("div")[0];
  element.appendChild(p);
  var form = document.createElement("FORM");
  element.appendChild(form);

  var label = document.createElement("label");
  label.innerHTML = "Nama User";
  form.appendChild(label);
  var input_nama = document.createElement("input");
  input_nama.type = "text";
  input_nama.placeholder = "Nama User..";
  input_nama.name = "nama_user";
  input_nama.className = "form_login";
  form.appendChild(input_nama);

  var label2 = document.createElement("label2");
  label2.innerHTML = "Nomor Handphone";
  form.appendChild(label2);
  var input_hp = document.createElement("input");
  input_hp.type = "text";
  input_hp.placeholder = "Nomor Handphone..";
  input_hp.name = "nomor_hp";
  input_hp.className = "form_login";
  form.appendChild(input_hp);

  var label3 = document.createElement("label3");
  label3.innerHTML = "Username";
  form.appendChild(label3);
  var input_username = document.createElement("input");
  input_username.type = "text";
  input_username.placeholder = "Username atau email..";
  input_username.name = "username";
  input_username.className = "form_login";
  form.appendChild(input_username);

  var label4 = document.createElement("label4");
  label4.innerHTML = "Password";
  form.appendChild(label4);
  var input_password = document.createElement("input");
  input_password.type = "text";
  input_password.placeholder = "Password..";
  input_password.name = "password";
  input_password.className = "form_login";
  form.appendChild(input_password);


  var tombol = document.createElement("input");
  tombol.type = "submit";
  tombol.className = "tombol_login";
  tombol.value = "DAFTAR SEKARANG";
  form.appendChild(tombol);
}
