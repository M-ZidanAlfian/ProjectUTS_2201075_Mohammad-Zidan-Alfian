const Footer=()=>{
    return(
        <footer class="footer">
            <p class="footer__title">Mohammad Zidan Alfian</p>
            <div class="footer__social">
                <a href="https://www.facebook.com/zidan.alfian.357?mibextid=rS40aB7S9Ucbxw6v" class="footer__icon"><i class='bx bxl-facebook' ></i></a>
                <a href="https://www.instagram.com/fianzi_0" class="footer__icon"><i class='bx bxl-instagram' ></i></a>
            </div>
            <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list">
                        <li class="nav__item"><a href="/home" class="nav__link active">Home</a></li>
                        <li class="nav__item"><a href="/about" class="nav__link">About</a></li>
                        <li class="nav__item"><a href="/contact" class="nav__link">Contact</a></li>
                    </ul>
             </div>


            <p class="footer__copy">@i am human</p>
        </footer>
    );
}

export default Footer;