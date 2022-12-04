let flag = 1;
let random = 0;

let texto = "";
let imagen = "";

function SI() {
    texto += `
    <div class="row my-5">
    <div class="mb-3 col-4">
        <label for="" class="form-label">Nombre</label>
        <input type="text" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
        <small id="helpId" class="text-muted">Ingresa tu nombre</small>
    </div>
    <div class="mb-3 col-4">
        <label for="" class="form-label">Apellidos</label>
        <input type="text" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
        <small id="helpId" class="text-muted">apellido? 🤨</small>
    </div>
    <div class="mb-3 col-4">
        <label for="" class="form-label">Email</label>
        <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId"
            placeholder="abc@mail.com">
        <small id="emailHelpId" class="form-text text-muted">Corre de contacto</small>
    </div>
    <div class="mb-3 col-6">
        <label for="" class="form-label"></label>
        <textarea class="form-control" name="" id="" rows="3"
            placeholder="Ya se que fui ingenioso (Deja detalles que quieras aca)"></textarea>
        <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
            <label class="form-check-label" for="flexSwitchCheckDefault">Acepto terminos y
                condiciones</label>
        </div>
    </div>

    <div class="mb-3 col-3">
        <label for="" class="form-label">Hora</label>
        <input type="time" class="form-control" name="" id="age" aria-describedby="helpId" placeholder="">
    </div>
    <div class="mb-3 col-3">
        <label for="" class="form-label">Fecha</label>
        <input type="datetime-local" class="form-control" name="" id="" aria-describedby="helpId"
            placeholder="">
        <small id="helpId" class="form-text text-muted">Que dia sera?</small>
    </div>
    <button type="submit" class="btn btn-secondary" data-bs-toggle="modal"
        data-bs-target="#modalId">Enviar</button>
</div>
`
    document.getElementById("By").innerHTML = "";
    document.getElementById("Bn").innerHTML = "";
    document.getElementById("agregar").innerHTML = texto;

    imagen = '<img src="img/xmas-happy.gif" alt="" class="img-fluid">'
    document.getElementById("imagench").innerHTML = imagen;
    
    document.getElementById("cambio").innerHTML = "Nos vemos pronto <3";
}

function rapidez() {
    Bns.value = "Ya no me hables juli"
    bys.value = "mentilas"

    imagen = '<img src="img/bugs-bunny-crying.gif" alt="" class="img-fluid">'
    document.getElementById("imagench").innerHTML = imagen;
    document.getElementById("cambio").innerHTML = "Lo entendere </3";
}

function No() {

    if (flag == 1) {
        random = 0;
        random = (Math.random() * 800);
        random = Math.floor(random);

        Bn.style.top = random + "px";

        random = 0;
        random = (Math.random() * 600);
        random = Math.floor(random);
        Bn.style.left = random + "px";

        imagen = '<img src="img/the-simpsons-homer-simpson.gif" alt="" class="img-fluid">'
        document.getElementById("imagench").innerHTML = imagen;
    
        flag = 2;

    } else if (flag == 2) {
        random = 0;
        random = (Math.random() * 800);
        random = Math.floor(random);

        Bn.style.top = random + "px";


        random = 0;
        random = (Math.random() * 600);
        random = Math.floor(random);
        Bn.style.left = random + "px";

        imagen = '<img src="img/marge-ashamed.gif" alt="" class="img-fluid">'
        document.getElementById("imagench").innerHTML = imagen;
        flag = 3;

    } else if (flag == 3) {
        random = 0;
        random = (Math.random() * 800);
        random = Math.floor(random);

        Bn.style.top = random + "px";

        random = 0;
        random = (Math.random() * 600);
        random = Math.floor(random);
        Bn.style.left = random + "px";

        imagen = '<img src="img/the-simpsons-homer-simpson.gif" alt="" class="img-fluid">'
        document.getElementById("imagench").innerHTML = imagen;

        flag = 4;

    } else if (flag == 4) {
        random = 0;
        random = (Math.random() * 800);
        random = Math.floor(random);

        Bn.style.top = random + "px";

        random = 0;
        random = (Math.random() * 600);
        random = Math.floor(random);
        Bn.style.left = random + "px";

        imagen = '<img src="img/marge-ashamed.gif" alt="" class="img-fluid">'
        document.getElementById("imagench").innerHTML = imagen;

        flag = 5;

    } else if (flag == 5) {
        random = 0;
        random = (Math.random() * 800);
        random = Math.floor(random);

        Bn.style.top = random + "px";

        random = 0;
        random = (Math.random() * 600);
        random = Math.floor(random);
        Bn.style.left = random + "px";

        flag = 1;
    }
}