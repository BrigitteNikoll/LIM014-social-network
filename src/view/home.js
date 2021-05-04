export default () => {
  const viewHome = document.createElement('div');
  viewHome.innerHTML = `
      <div class="containerPost">
        <div class="boxPost">
          <form action="">
            <textarea id="formPost" placeholder="¿Qué estás pensando?" spellcheck = "false" required></textarea>
          </form> 
        </div>
      </div>

      <div class="optionSeccion">
        <select id="privacy-option">
          <option value="public" title = "Public">Public</option>
          <option value="private" title = "Private">Private</option>
        </select>
        <button type="submit" id="btnPost" >Publicar</button>
      </div>
      
      
       `;

  return viewHome;
};
