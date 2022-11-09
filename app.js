import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import SourceEditing from '@ckeditor/ckeditor5-source-editing/src/sourceediting';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import GeneralHtmlSupport from '@ckeditor/ckeditor5-html-support/src/generalhtmlsupport';

ClassicEditor
    .create( document.querySelector( '#editor' ), {
        plugins: [
            Essentials,
            Paragraph,
            Bold,
            Italic,
            SourceEditing,
            Image,
            ImageToolbar,
            ImageResize,
            GeneralHtmlSupport,
        ],
        toolbar: [
            'sourceEditing',
            '|',
            'bold',
            'italic',
        ],
        image: {
            toolbar: [
                'imageResize',
            ],
            insert: {
                type: 'block',
            },
        },
        htmlSupport: {
            allow: [
                {
                    name: /.*/,
                    attributes: true,
                    classes: true,
                    styles: true
                }
            ]
        },
    } )
    .then( editor => {
        console.log( 'Editor was initialized', editor );
    } )
    .catch( error => {
        console.error( error.stack );
    } );