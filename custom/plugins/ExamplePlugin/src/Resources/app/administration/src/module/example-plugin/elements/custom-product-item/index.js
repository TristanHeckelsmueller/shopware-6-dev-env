Shopware.Service('cmsService').registerCmsElement({
    name: 'custom-product-item',
    label: 'Custom Product Item',
    component: 'sw-cms-el-custom-product-item',
    configComponent: 'sw-cms-el-config-custom-product-item',
    previewComponent: 'sw-cms-el-preview-custom-product-item',
    defaultConfig: {
        dailyUrl: {
            source: 'static',
            value: ''
        }
    }
});