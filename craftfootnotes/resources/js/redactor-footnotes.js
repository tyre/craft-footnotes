if (!RedactorPlugins) var RedactorPlugins = {};

RedactorPlugins.footnotes = function() {
  return {
    init: function() {
      var footnotesButton = this.button.add('footnotes', 'foot<sup>note</sup>');
      var sourceButton = this.button.add('inline-source', 'src<sup>※</sup>');
      this.button.addDropdown(button, this.footnotes.addFootnoteReference);
      this.button.addDropdown(button, this.footnotes.addInlineSource);
    },
    getFootnoteTemplate: function() {
      return String()
        + '<div class="modal-section" id="redactor-modal-footnotes">'
          + '<section>'
            + '<label>Footnote reference number</label>'
            + '<input id="footnotes-reference-number" type="number"></input>'
          + '</section>'
          + '<section>'
            + '<button id="redactor-modal-button-action">Insert</button>'
            + '<button id="redactor-modal-button-cancel">Cancel</button>'
          + '</section>'
        + '</div>';
    },
    addFootnoteReference: function() {
      this.modal.addTemplate('footnotes', this.footnotes.getFootnoteTemplate());
      this.modal.load('footnotes', 'Add a footnote', 400);

      var button = this.modal.getActionButton();
      button.on('click', this.footnotes.insertFootnotesReference);

      this.modal.show();

      $('#footnotes-reference-number').focus();
    },
    insertFootnotesReference: function() {
      var footnotesReferenceNumber = $('#footnotes-reference-number').val();
      this.modal.close();
      this.insert.html(this.footnotes.footnootesReferenceHtml(footnotesReferenceNumber));
    },
    footnootesReferenceHtml: function(footnotesReferenceNumber) {
      return [
        '<sup id="footnote-reference-',
        '" class="footnote-reference"><a href="#footnote-text-',
        '">',
        '</a></sup>'
      ].join(footnotesReferenceNumber);
    },
    // Sources
    addInlineSource: function() {
      this.modal.addTemplate('inline-source', this.footnotes.getSourceTemplate());
      this.modal.load('inline-source', 'Add an inline citation', 400);
      var button = this.modal.getActionButton();
      button.on('click', this.footnotes.insertFootnotesReference);

      this.modal.show();

      $('#source-text').focus();
    },
    getSourceTemplate: function() {
      return String() +
        + '<div class="modal-section" id="redactor-modal-footnotes">'
          + '<section>'
            + '<label>Citation</label>'
            + '<textarea id="source-text"></textarea>'
          + '</section>'
          + '<section>'
            + '<label>Source link text</label>'
            + '<input id="source-link-text" type="text"></input>'
          + '</section>'
          + '<section>'
            + '<label>Source link</label>'
            + '<input id="source-link" type="text"></input>'
          + '</section>'
          + '<section>'
            + '<button id="redactor-modal-button-action">Insert</button>'
            + '<button id="redactor-modal-button-cancel">Cancel</button>'
          + '</section>'
        + '</div>';
    },
    insertInlineCitation: function() {
      var sourceText = $('#source-text').val();
      var sourceLinkText = $('#source-link-text').val();
      var sourceLink = $('#source-link').val();
      this.modal.close();
      this.insert.html(
        this.footnotes.footnootesReferenceHtml(
            sourceText,
            sourceLinkText,
            sourceLink
        )
      );
    },
    inlineCitationHtml: function(sourceText, sourceLinkText, sourceLink) {
      var sourceLinkHTML = '';
      if (sourceLink.length) {
        var link = '<a href="'+sourceLink+'" target="_blank">'+sourceLinkText+'</a>';
        sourceLinkHTML = '<span class="citation-link">Source:</span> '+link;
      }
      return String()
        + '<sup class="inline-citation">'
          + '<span class="inline-citation-marker">※</span>'
          + '<div>'
            + '<cite class="citation">' + sourceText + '</cite>'
            + '<p>' + sourceLinkHTML '</p>'
          + '</div>'
        +'</sup>';
    },
  };
};
