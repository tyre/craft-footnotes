if (!RedactorPlugins) var RedactorPlugins = {};

RedactorPlugins.footnotes = function() {
  return {
    init: function() {
      var button = this.button.add('footnotes', 'foot<sup>note</sup>');
      this.button.addDropdown(button, {
        point1: { title: "Add reference", func: this.footnotes.addReference },
        point2: { title: "Add text", func: this.footnotes.addText }
      );
    },
    getTemplate: function() {
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
    addReference: function() {
      this.modal.addTemplate('footnotes', this.footnotes.getTemplate());
      this.modal.load('footnotes', 'Add a footnote', 400);

      var button = this.modal.getActionButton();
      button.on('click', this.footnotes.insertReference);

      this.modal.show();

      $('#footnotes-reference-number').focus();
    },
    insertReference: function() {
      var footnotesReferenceNumber = $('#footnotes-reference-number').val();
      this.modal.close();
      this.insert.html(this.footnotes.referenceHtml(footnotesReferenceNumber));
    },
    referenceHtml: function(footnotesReferenceNumber) {
      return [
        '<sup id="footnote-reference-',
        '" class="footnote-reference"><a href="#footnote-text-',
        '">',
        '</a></sup>'
      ].join(footnotesReferenceNumber);
    },
    addText: function() {
      this.modal.addTemplate('footnotes', this.footnotes.getTemplate());
      this.modal.load('footnotes', 'Add a footnote', 400);

      var button = this.modal.getActionButton();
      button.on('click', this.footnotes.insertText);

      this.modal.show();

      $('#footnotes-reference-number').focus();
    },
    insertText: function() {
      var footnotesTextNumber = $('#footnotes-reference-number').val();
      this.modal.close();
      this.insert.html(this.footnotes.textHtml(footnotesTextNumber));
    },
    textHtml: function(footnotesReferenceNumber) {
      return [
        '<li id="footnote-text-',
        '" class="footnote-text">Footnote text<a href="#ftn-1',
        '"> ↩</a>'
      ].join(footnotesReferenceNumber);
    },
  };
};
