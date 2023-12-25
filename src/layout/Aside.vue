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
        <img src="data:image/jpeg;base64,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" class="card-img" alt="imgs"/>
        <div class="card-img-overlay">
          <h5 class="card-title mt-4">Rektorga murojaat</h5>
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
    <div class="row social">
      <div class="col-6 p-0 text-center">
        <div class="border-bottom border-end">
          <a href="https://icons8.com/icon/32323/instagram">
            <img width="48" height="48" src="https://img.icons8.com/color/48/telegram-app--v1.png"
                 alt="telegram-app--v1"/>
          </a>
          <p class="p-0 m-0 fw-bold">Obunachilar</p>
          <p class="p-0 mb-1" style="font-size: 12px; color: #807D7DFF;">1234567</p>
        </div>
        <div class="border-top border-end">
          <a href="https://icons8.com/icon/32323/instagram">
            <img width="48" height="48" src="https://img.icons8.com/color/48/instagram-new--v1.png"
                 alt="instagram-new--v1"/>
          </a>
          <p class="p-0 m-0 fw-bold">Obunachilar</p>
          <p class="p-0" style="font-size: 12px; color: #807D7DFF;">1234567</p>
        </div>
      </div>
      <div class="col-6 p-0 text-center">
        <div class="border-bottom border-start">
          <a href="https://icons8.com/icon/32323/instagram">
            <img width="48" height="48" src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new"/>
          </a>
          <p class="p-0 m-0 fw-bold">Obunachilar</p>
          <p class="p-0 mb-1" style="font-size: 12px; color: #807D7DFF;">1234567</p>
        </div>
        <div class="border-top border-start">
          <a href="https://icons8.com/icon/32323/instagram">
            <img width="48" height="48" src="https://img.icons8.com/color/48/twitter-squared.png"
                 alt="twitter-squared"/>
          </a>
          <p class="p-0 m-0 fw-bold">Obunachilar</p>
          <p class="p-0" style="font-size: 12px; color: #807D7DFF;">1234567</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.social {
  background-color: #f6f9f8;
  padding: 10px;
  margin-top: 15px;
}

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
  color: #0411f8;
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

</style>