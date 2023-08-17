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
        <img src="@/assets/images.jpg" class="card-img" alt="imgs"/>
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
    <!--    <div class="row social">-->
    <!--      <div class="col-8">-->
    <!--        <h5 class="title text-dark fw-bold">Institutning Telegram rasmiy kanalini kuzatib boring</h5>-->
    <!--        <a href="#"-->
    <!--        >-->
    <!--          <button class="mt-1 py-1 px-2  btn-primary">Aʼzo bo‘lish</button>-->
    <!--        </a-->
    <!--        >-->
    <!--      </div>-->
    <!--      <div class="col-4 pt-4">-->
    <!--        <img width="48" height="48" src="https://img.icons8.com/color/48/telegram-app&#45;&#45;v1.png" alt="telegram-app&#45;&#45;v1"/>-->
    <!--      </div>-->
    <!--    </div>-->
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