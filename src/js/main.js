<script type="text/javascript">
YUI().use('node', function (Y) {
    
// Auto Fill response on submission form
  var contactFill = Y.one('div.form-item.field.textarea textarea');
  if(contactFill) {
	    contactFill._node.innerText = "Hi!  I'd love to start a conversation about buying or selling a home.";
    console.log('contact fill = ',contactFill);
  }


// Grab elements to move on listings/stories pages     
  var varTitle = Y.one('.BlogItem-title');
  var varAuthor = Y.one('div.Blog-meta.BlogItem-meta a.Blog-meta-item.Blog-meta-item--author');
  var varDate = Y.one('div.Blog-meta.BlogItem-meta time.Blog-meta-item--date');     
    
  // Top container
  var blogContainer = Y.Node.create('<div/>');

  var metaContainer = Y.Node.create('<div/>');   
  var blogHeader = Y.Node.create('<div/>');
	var blogColContent = Y.Node.create('<div/>');
  var contentContainer = Y.Node.create('<div/>');
	var blogColSpacer = Y.Node.create('<div/>');
  var blogColSpacerStart = Y.Node.create('<div/>');
  var blogSpacer = Y.Node.create('<div/>');
 
  blogContainer.addClass('row sqs-row topContainer');

  blogColSpacerStart.addClass('col sqs-col-1 span-1');
  blogSpacer.addClass('sqs-block spacer-block sqs-block-spacer sized vsize-1');
  blogColSpacerStart.append(blogSpacer);

  blogColSpacer.addClass('col sqs-col-4 span-4');

  blogColContent.addClass('col sqs-col-7 span-7');
  contentContainer.addClass('sqs-block html-block sqs-block-html blogContent');
  contentContainer.append(blogHeader);

  blogColContent.append(contentContainer);
  
  metaContainer.addClass('metaDetails');
  metaContainer.append(varDate);
  metaContainer.append(varAuthor);

  blogHeader.append(varTitle);
  blogHeader.append(metaContainer);

  blogContainer.append(blogColSpacerStart);
  blogContainer.append(blogColContent);
  blogContainer.append(blogColSpacer);
  
  // This is the parent for the listing blog
  //   var varGallery = Y.one('section > article > div.sqs-layout.sqs-grid-12.columns-12 div.row.sqs-row:first-child');
  var varGallery = Y.one('section > article div.col.sqs-col-12.span-12 div.row.sqs-row');

  // console.log("this is the parent destination:  Want to insert after this...", varGallery);
  if(varGallery) {
    varGallery.insert(blogContainer, 'before');
  }

  ///////////////////////////////////////////////////////
  //   var innerContent = document.querySelectorAll('section.Main-content nav > a > span');
  //   innerContent.innerHTML ="more";   
  ///////////////////////////////////////////////////////
  
  var succParent = Y.one('section > .Intro-content div.col.sqs-col-12.span-12');
  if (succParent) {
    console.log("success story parent", succParent);

    var newCont = document.createElement('div');
    newCont.className = 'bannerContent';
    var entity = document.querySelectorAll('section > .Intro-content div.col.sqs-col-12.span-12');
    for (var i=0; i< 2; i++) {
     console.log("children...", entity[0].children[i]);
     newCont.appendChild(entity[0].children[0]);
    }
    console.log("appended object", newCont);   
    succParent.prepend(newCont);
  } 
});
</script>
