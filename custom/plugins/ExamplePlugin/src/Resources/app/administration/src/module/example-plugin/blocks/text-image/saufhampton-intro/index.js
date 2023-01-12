import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'saufhampton-intro',
    category: 'text-image',
    label: 'Saufhampton Intro',
    component: 'sw-cms-block-saufhampton-intro',
    previewComponent: 'sw-cms-preview-saufhampton-intro',
    defaultConfig: {
    },
    slots: {
        left: 'text',
        right: 'image'
    }
});