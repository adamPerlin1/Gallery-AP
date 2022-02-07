'use strict'

$(onInit);

function onInit() {
  console.log('its me!');
  renderProjs();
}

function renderProjs() {
  const projs = getProjs();
  console.log(projs);
  var strHtmls = projs.map(proj => {
    const currProjStr = `
    <div class="col-md-4 col-sm-6 portfolio-item">
     <a class="portfolio-link" data-toggle="modal" href="#portfolioModal">
       <div class="portfolio-hover">
         <div class="portfolio-hover-content">
           <i class="fa fa-plus fa-3x"></i>
         </div>
       </div>
       <img class="img-fluid" src="img/${proj.imgUrl}" alt="">
     </a>
     <div class="portfolio-caption">
       <h4>${proj.name}</h4>
       <p class="text-muted">${proj.desc}</p>
     </div>
    </div>
    `
    const $elCurrProj = $(currProjStr).click(proj, setModal);
    return $elCurrProj;

  })
  $('.proj-list').html(strHtmls);
}

function setModal(ev) {
  const evData = ev.data;
  const $elModal = $('.modal-body');

  $elModal.find('h2').text(evData.name);
  $elModal.find('.item-intro').text(evData.title);
  $elModal.find('.game-img').attr('src', `img/${evData.imgUrl}`);
  $elModal.find('.description').text(evData.desc);
  $elModal.find('.date').text(evData.publishedAt);
  $elModal.find('.category').text(evData.labels.join(', '));
}
