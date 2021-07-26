export default function InfoEntry() {
  return (
    <form>
      <label>Email</label>
      <input type="text" placeholder="Enter e-mail here"></input>
      <br></br>
      <label>Name</label>
      <input type="text" placeholder="Enter name here"></input>
      <br></br>
      <label>Contact number</label>
      <input type="text" placeholder="Enter contact number here"></input>
      <br></br>
      <button>Proceed to pay</button>
      <button>
        <a href="/book-slot">Cancel</a>
      </button>
    </form>
  );
}
