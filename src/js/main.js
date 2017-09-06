<script type="text/javascript">
YUI().use('node', function (Y) {

////////////////////////////
// Contact form adjustments    
// Auto Fill response on submission form
  var contactFill = Y.one('div.form-item.field.textarea textarea');
  if(contactFill) {
	    contactFill._node.innerText = "Hi!  I'd love to start a conversation about buying or selling a home.";
    console.log('contact fill = ',contactFill);
  }
  ////////////////////////////


////////////////////////////
// Move title listing, author and date to new locations on blog post
// Grab all elements first  
// Elements to move on listings/stories pages     
  var Title = Y.one('.BlogItem-title');
  var Author = Y.one('div.Blog-meta.BlogItem-meta a.Blog-meta-item.Blog-meta-item--author');
  var varDate = Y.one('div.Blog-meta.BlogItem-meta time.Blog-meta-item--date');     

  // Container class for date and author combined element (L4)
  var metaContainer = Y.Node.create('<div/>');   
  metaContainer.addClass('metaDetails');
  metaContainer.append(varDate);
  metaContainer.append(Author);

  // Append Title and data/author to content container (L3) 
  var blogHeader = Y.Node.create('<div/>');
  blogHeader.append(Title);
  blogHeader.append(metaContainer);

  //  Append content container 
  var contentContainer = Y.Node.create('<div/>');
  contentContainer.addClass('sqs-block html-block sqs-block-html blogContent');
  contentContainer.append(blogHeader);

  // Build 1 row spacer element for the top of the page
  var blogSpacer = Y.Node.create('<div/>');
  blogSpacer.addClass('sqs-block spacer-block sqs-block-spacer sized vsize-1');
	
  // create 1 grid wide spacer on content row to align with other page content
  var blogColSpacerStart = Y.Node.create('<div/>');
  blogColSpacerStart.addClass('col sqs-col-1 span-1');
  blogColSpacerStart.append(blogSpacer);

  // Add 4 grid spacer at end of content row
  var blogColSpacer = Y.Node.create('<div/>');
  blogColSpacer.addClass('col sqs-col-4 span-4');

  // Create 7 grid wide element to put content container
  var blogColContent = Y.Node.create('<div/>');
  blogColContent.addClass('col sqs-col-7 span-7'); 
  blogColContent.append(contentContainer);
  
  // Top container for new content (L1)
  var blogContainer = Y.Node.create('<div/>');
  blogContainer.addClass('row sqs-row topContainer');

  // Append all 3 grid items together to make content row 
  blogContainer.append(blogColSpacerStart);
  blogContainer.append(blogColContent);
  blogContainer.append(blogColSpacer);
  
  // Append top blog container to parent element in page.  Only on stories and listings pages 
  // section > article limits this to only blog content articles.  
  var varGallery = Y.one('section > article div.col.sqs-col-12.span-12 div.row.sqs-row');

  if(varGallery) {
    varGallery.insert(blogContainer, 'before');
    console.log("inside the gallery blog section...append section");
  }
  ///////////////////////////////////////////////////////


  ///////////////////////////////////////////////////////
  // on listings page, there isn't a page ID as the content isn't an index page
  // Need to wrap heading content (text box) and content (text box) in parent div
  // so we can apply css rules to add pop color line between content.
  
  // grab parent component only on listing or stories summary pages     
  var succParent = Y.one('section > .Intro-content div.col.sqs-col-12.span-12');
  if (succParent) {
    console.log("success or listing story page", succParent);

    // create new div container with bannerContent class
    var newCont = document.createElement('div');
    newCont.className = 'bannerContent';

    // Pull first 2 elements on the page and append to new div  
    var entity = document.querySelectorAll('section > .Intro-content div.col.sqs-col-12.span-12');
    for (var i=0; i< 2; i++) {
     console.log("children...", entity[0].children[i]);
     newCont.appendChild(entity[0].children[0]);
    }
    // append children to new parent div and insert as first element
    console.log("appended object", newCont);   
    succParent.prepend(newCont);
  } 
  ///////////////////////////////////////////////////////

});
</script>
