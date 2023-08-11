<template>
  <div class="container-fluid p-0">
    <div class="menu">
      <h2 class="text-center py-3 text-light">Kategoriya</h2>
      <div class="row">
        <ul
          class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
          id="menu"
        >
          <li class="nav-item">
            <a href="#" class="nav-link align-middle px-0 fs-4 text-dark">
              test
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-0 align-middle fs-4 text-dark"
              >test</a
            >
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-0 align-middle fs-4 text-dark">
              test</a
            >
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-0 align-middle fs-4 text-dark">
              test</a
            >
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-0 align-middle fs-4 text-dark">
              test</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class=" mt-5  mb-5">
      <div class="card text-white p-0">
        <img src="@/assets/images.jpg" class="card-img" alt="imgs" />
        <div class="card-img-overlay">
          <h5 class="card-title">Rektorga murojaat</h5>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Murojaat qilish
          </button>
        </div>
      </div>
      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog .modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Murojaat yo‘llash
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div id="exampleModalLabel" class="modal-body">
              <div class="flex flex-col">
                <label for="name" class="apply-label">Ismingiz</label>
                <input
                  placeholder="Ismingizni kiriting"
                  id="name"
                  type="text"
                  class="form-control"
                />
              </div>
              <div class="flex flex-col">
                <label for="name" class="apply-label">Familiyangiz</label>
                <input
                  placeholder="Familiyangizni kiriting"
                  id="name"
                  type="text"
                  class="form-control"
                />
              </div>
              <div class="flex flex-col">
                <label for="name" class="apply-label"
                  >Elektron pochta manzilingiz</label
                >
                <input
                  placeholder="Elektron pochta manzilingizni kiriting"
                  id="name"
                  type="text"
                  class="form-control"
                />
              </div>
              <div class="flex flex-col">
                <label for="name" class="apply-label">Telefon raqamingiz</label>
                <input
                  placeholder="Telefon raqamingizni kiriting"
                  id="name"
                  type="text"
                  class="form-control"
                />
              </div>
              <div class="flex flex-col position-relative">
                <label for="name" class="apply-label">Fayl</label>
                <input
                  placeholder="Fayl yuklang"
                  id="name"
                  type="file"
                  class="form-control apply-input-file"
                />
              </div>
              <div class="flex flex-col">
                <label for="name" class="apply-label">Murojaat matni</label>
                <textarea
                  placeholder="Matnni yozing"
                  id="name"
                  type="text"
                  class="apply-textarea form-control"
                ></textarea>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Bekor qilish
              </button>
              <button type="button" class="btn btn-primary sending">
                Yuborish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div class="card text-white card-social">
          <img src="@/assets/dima-solomin-3pwMu6uVsJI-unsplash.jpg" class="card-img-social" alt="...">
          <div class="card-img-overlay pt-1">
              <h5 class="title">Institutning Telegram rasmiy kanalini kuzatib boring</h5>
              <a href="#"
              ><button class="mt-1 py-1 px-2 btn btn-light">Aʼzo bo‘lish</button></a
              >
          </div>
      </div>
      <div class="card text-white card-social">
          <img src="@/assets/instagram.jpg" class="card-img-social" alt="...">
          <div class="card-img-overlay pt-1">
              <h5 class="title">Institutning  rasmiy Instagram sahifasi</h5>
              <a href="#"
              ><button class="mt-1 py-1 px-2 btn btn-light">Aʼzo bo‘lish</button></a
              >
          </div>
      </div>
      <div class="card text-white card-social">
          <img src="@/assets/facebook.jpg" class="card-img-social" alt="...">
          <div class="card-img-overlay pt-1">
              <h5 class="title">Institutning rasmiy Facebook sahifasi</h5>
              <a href="#"
              ><button class="mt-1 py-1 px-2 btn btn-light">Aʼzo bo‘lish</button></a
              >
          </div>
      </div>
      <div class="card text-white card-social">
          <img src="@/assets/twitter2.jpg" class="card-img-social" alt="...">
          <div class="card-img-overlay pt-1">
              <h5 class="title">Institutni  rasmiy  Twitter Sahifasida kuzating</h5>
              <a href="#"
              ><button class="mt-1 py-1 px-2 btn btn-light">Aʼzo bo‘lish</button></a
              >
          </div>
      </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.nav-pills {
  padding: 0px 10px;
}
.text-light {
  background-color: #002147;
}
.nav-item {
  padding-left: 15px;
  width: 100%;
  color: black;
  border-bottom: 1px solid #e8e5e5;
}
.menu {
  background-color: #f6f9f8;
  min-height: 345px;
  padding: 0px !important;
}
.nav-item:hover {
  background-color: #fdc800 !important;
}
.nav-link:hover {
  color: black;
}
.card-title {
  color: black;
}
.card-img {
  width: 100%;
  display: block;
  opacity: 0.6;
}
.btn-primary {
  padding: 2px 5px;
}
.modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: 1rem;
}
.flex-col {
  margin-bottom: 10px;
}

.sending {
  padding: 6px;
}
.title{
    font-size: 15px;
    color: white;
}
.card-social{
    height: 100px!important;
    margin-top: 10px;
}
.card-img-social {
    display: block;
    width: 100%;
    height: 100px;
}
</style>