
import "./App.css";

function App() {
  return (
    <div className="page">
      <div className="registration-card">

        <div className="event-info">
          <span className="tag">TECH CLUB PRESENTS</span>

          <h1>HACKATHON<br />2026</h1>

          <p className="description">
            Turn your ideas into reality.
            Join us for an exciting 24-hour
            coding experience.
          </p>

          <div className="event-details">
            <p>📅 15 December 2026</p>
            <p>📍 College Auditorium</p>
            <p>⏰ 9:00 AM onwards</p>
          </div>

          <p className="bottom-text">
            Code. Create. Innovate.
          </p>
        </div>

        <div className="form-section">
          <h2>Register Now</h2>
          <p className="form-subtitle">
            Fill in your details to join the event.
          </p>

          <form>
            <label>Full Name</label>
            <input type="text"
              placeholder="Your full name" required />

            <label>College Email</label>
            <input type="email"
              placeholder="example@college.com" required />

            <label>Roll Number</label>
            <input type="text"
              placeholder="Enter roll number" required />

            <label>Department</label>
            <select required>
              <option value="">Choose department</option>
              <option>CSE</option>
              <option>AIML</option>
              <option>IT</option>
              <option>ECE</option>
              <option>Mechanical</option>
            </select>

            <label>T-shirt Size</label>
            <div className="sizes">
              <label><input type="radio" name="size" value="S" required /> S</label>
              <label><input type="radio" name="size" value="M" /> M</label>
              <label><input type="radio" name="size" value="L" /> L</label>
              <label><input type="radio" name="size" value="XL" /> XL</label>
            </div>

            <button type="submit">Complete Registration →</button>
          </form>

          <p className="footer">
            © 2026 Technical Club
          </p>
        </div>

      </div>
    </div>
  );
}

export default App;
