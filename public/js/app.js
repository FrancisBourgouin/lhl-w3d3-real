const ROOT_URL = 'http://jsonplaceholder.typicode.com/posts';

// Creating a Post Element
const createPost = postObj => {
  // <div class="post-preview" data-article-id="">
  //   <a href="#">
  //     <h2 class="post-title"></h2>
  //     <h3 class="post-subtitle">Problems look mighty small from 150 miles up</h3>
  //   </a>
  //   <p class="post-meta">
  //     Posted by <a href="#">Start Bootstrap</a> on September 24, 2014
  // </p>
  // </div>

  const $postDiv = $('<div>')
    .addClass('post-preview')
    .attr('data-article-id', postObj.id);

  const $link = $('<a>').attr('href', '#');

  // appendTo is for adding the child to its parent
  $('<h2>')
    .text(postObj.title)
    .appendTo($link);

  $('<h3>')
    .text(`Post#${postObj.id}: Problems look mighty small from 150 miles up`)
    .appendTo($link);

  // append -> starting with the parent to add the child
  $postDiv.append($link);

  $('<p>')
    .addClass('post-meta')
    .html('Posted by <a href="#">Start Bootstrap</a> on September 24, 2014')
    .appendTo($postDiv);

  return $postDiv;
};

const renderPosts = postArr => {
  for (const postEl of postArr) {
    // adding the postElement to the page (adding it to the DOM)
    $('#articles').append(createPost(postEl));
  }
};

const request = url => {
  // Create Ajax request using JQuery

  // Set the options for the request
  $.ajax({
    method: 'GET',
    url: url,
  })
    // callback function when the request is done. We have access to the response.
    .done(response => {
      // Creating and adding all the posts to the page
      renderPosts(response);
    })
    // Catching an error with the request
    .fail(error => {
      console.log(`Error: ${error}`);
    })
    // This will always execute
    .always(() => {
      console.log('Request completed.');
    });
};

$(document).ready(() => {
  console.log('Document loaded!');

  // Create an AJax Request to get the data
  request(ROOT_URL);

  $('#load-more').on('click', function(event) {
    event.preventDefault();
    console.log(this, event.target);
    request(ROOT_URL);
  });
});
