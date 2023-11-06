import "../css/footer.css"
const Foot = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li>
                <span>about us</span>
              </li>
              <li>
                <span>our services</span>
              </li>
              <li>
                <span>privacy policy</span>
              </li>
              <li>
                <span>affiliate program</span>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li>
                <span>FAQ</span>
              </li>
              <li>
                <span>shipping</span>
              </li>
              <li>
                <span>returns</span>
              </li>
              <li>
                <span>order status</span>
              </li>
              <li>
                <span>payment options</span>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>online shop</h4>
            <ul>
              <li>
                <span>watch</span>
              </li>
              <li>
                <span>bag</span>
              </li>
              <li>
                <span>shoes</span>
              </li>
              <li>
                <span>dress</span>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <span>
                <i className="fab fa-facebook-f"></i>
              </span>
              <span>
                <i className="fab fa-twitter"></i>
              </span>
              <span>
                <i className="fab fa-instagram"></i>
              </span>
              <span>
                <i className="fab fa-linkedin-in"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Foot;
