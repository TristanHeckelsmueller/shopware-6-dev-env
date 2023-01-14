import './component';
import './preview';

/**
 * @private
 * @package content
 */
Shopware.Service('cmsService').registerCmsBlock({
    name: 'custom-product-column',
    category: 'commerce',
    label: 'Saufhampton Three Column',
    component: 'sw-cms-block-custom-product-column',
    previewComponent: 'sw-cms-preview-custom-product-column',
    defaultConfig: {
    },
    slots: {
        left: 'product-box',
        center: 'product-box',
        right: 'product-box',
    }
});