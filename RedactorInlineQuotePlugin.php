<?php

namespace Craft;

class redactorInlineQuotePlugin extends BasePlugin
{
    function getName()
    {
         return Craft::t('Redactor Inline Quote');
    }

    function getVersion()
    {
        return '0.0.1';
    }

    function getDeveloper()
    {
        return 'Chris Maddox';
    }

    public function getPluginUrl()
    {
        return 'https://github.com/tyre/redactor-inline-quote';
    }

    public function getDocumentationUrl()
    {
        return $this->getPluginUrl() . '/blob/master/README.md';
    }


    public function getSourceLanguage()
    {
        return 'en';
    }

    protected function defineSettings()
    {
        return array(
            'insertquotes' => array(
                AttributeType::Bool, 'default' => true
            )
        );
    }

    public function init()
    {
        if (craft()->request->isCpRequest())
        {
            craft()->templates->includeJsResource('redactorinlinequote/js/redactor-inline-quote.js');
        }
    }
}
