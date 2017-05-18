<?php
namespace Craft;

class CraftFootnotes_FootnotesFieldType extends BaseFieldType
{
    public function getName()
    {
        return 'Footnotes';
    }

    public function getInputHtml($name, $value)
    {
        return craft()->templates->render('footnotes/html/footnotes-input-template', array(
            'name'  => $name,
            'value' => $value
        ));
    }
}
