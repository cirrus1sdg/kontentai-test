const KontentDelivery = require('@kontent-ai/delivery-sdk');
const $ = require('jquery');

const deliveryClient = KontentDelivery.createDeliveryClient({
  projectId: 'b3c9e788-1fb8-0018-38e7-4441e721fbed',
  previewApiKey: 'ew0KICAiYWxnIjogIkhTMjU2IiwNCiAgInR5cCI6ICJKV1QiDQp9.ew0KICAianRpIjogIjQ4N2QzYzA5OTE3MTQzNTlhYzNiMzNjYzQ2N2UwNTFiIiwNCiAgImlhdCI6ICIxNjU4MTYwODQwIiwNCiAgImV4cCI6ICIyMDAzNzYwODQwIiwNCiAgInZlciI6ICIxLjAuMCIsDQogICJwcm9qZWN0X2lkIjogImIzYzllNzg4MWZiODAwMTgzOGU3NDQ0MWU3MjFmYmVkIiwNCiAgImF1ZCI6ICJwcmV2aWV3LmRlbGl2ZXIua2VudGljb2Nsb3VkLmNvbSINCn0.bvmFrPhVmx_I3_r2hP6wS8JwA_jiJWqDGQAbH2JJ9uo',
  defaultQueryConfig: {
    usePreviewMode: true, // Queries the Delivery Preview API.
  }
});

async function loadContent(){
  const response = await deliveryClient.item('landing_page_with_product_listing')
      .toPromise();

  console.log(response);

  $("#output").append(`<h2>${response.data.item.elements.title.value}</h2>`);
  $("#output").append(`${response.data.item.elements.body.value}`);
}

$(document).ready(function(){
  loadContent();
});