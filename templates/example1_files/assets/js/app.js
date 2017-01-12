thaiKitchen = {


    pages : {
        _common : function(){
            self = thaiKitchen;

            $(document).ready(function(){
                $(document).foundation();
                self.fn.toggleSearch._init();
            });
        },

        _index : function(){
            this._common();
            $(document).ready(function(){
                self.fn.homeSlider._init();
                self.fn.productHover._init();
            });
        },

        _products : function(){
            this._common();
            $(document).ready(function(){
                self.fn.productHover._init();
                self.fn.productFilter._init();
            });
        },

        _singleProduct : function(){
            this._common();
            $(document).ready(function(){
                self.fn.productHover._init();
            });
        },

        _recipes : function(){
            this._common();
            $(document).ready(function(){
                self.fn.productHover._init();
                self.fn.unavoidableRecipeSlider._init();
                self.fn.freshRecipeSlider._init();
            });
        },

        _recipeCategory : function(){
            this._common();
            $(document).ready(function(){
                self.fn.productHover._init();
            });
        },

        _singleRecipe : function(){
            this._common();
            $(document).ready(function(){
                self.fn.productHover._init();
                self.fn.verticalSlide._init();
            });
        },

        _contact : function(){
            this._common();
            $(document).ready(function(){
                self.fn.contactRequestToggle._init();
            });
        },

        _blogList : function(){
            this._common();
            $(document).ready(function(){
                self.fn.parralaxBlogList._init();
            });
        },

        _blogArticle : function(){
            this._common();
            $(document).ready(function(){
                self.fn.blogArticleAnimateTrigger._init();
            });
        }
    },

    fn : {

        toggleSearch: {

            _init: function () {
                var searchButton = $('.icon.icon--search'),
                    searchInput  = $('.top-search');

                searchButton.on('click', function(){
                   searchInput.toggleClass('active');
                });
            }

        },

        homeSlider: {

            _init: function () {
                var homeSlider = $('.home-slider');

                homeSlider.bxSlider({
                    controls: false,
                    auto: true,
                    pause: 5000
                });
            }

        },

        unavoidableRecipeSlider: {

            _init: function () {
                var unavoidableRecipeSlider = $('.unavoidable-recipe-slider');

                unavoidableRecipeSlider.bxSlider({
                    controls: false,
                    pause: 2000,
                    pager: false,
                    mode: 'fade'
                });

                $('#prev-unavoidable').on('click', function(){
                    unavoidableRecipeSlider.goToPrevSlide();
                    return false;
                });

                $('#next-unavoidable').on('click', function(){
                    unavoidableRecipeSlider.goToNextSlide();
                    return false;
                });
            }

        },

        freshRecipeSlider: {

            _init: function () {
                var freshRecipeSlider = $('.fresh-recipe-slider');

                freshRecipeSlider.bxSlider({
                    controls: false,
                    pause: 2000,
                    pager: false,
                    mode: 'fade'
                });

                $('#prev-fresh').on('click', function(){
                    freshRecipeSlider.goToPrevSlide();
                    return false;
                });

                $('#next-fresh').on('click', function(){
                    freshRecipeSlider.goToNextSlide();
                    return false;
                });
            }

        },

        productHover: {

            _init: function () {
                this.mouseEnter();
                this.mouseLeave();
            },

            mouseEnter: function () {
                var article = $('article.single-product, article.the-recipe');

                article.on('mouseenter', function () {
                    $('.single-product__blocks-overlay, .the-recipe__blocks-overlay', this).stop().fadeIn();
                });
            },

            mouseLeave: function () {
                var article = $('article.single-product, article.the-recipe');

                article.on('mouseleave', function () {
                    $('.single-product__blocks-overlay, .the-recipe__blocks-overlay', this).stop().fadeOut();
                });
            }

        },

        productFilter: {
            _init: function(){

                console.log($('article[data-filter="pasta"]').length);

                var all = '[data-filter="all"]',
                    sauce = '[data-filter="sauce"]',
                    kit = '[data-filter="kit"]',
                    milk = '[data-filter="milk"]',
                    rice = '[data-filter="rice"]',
                    pasta = '[data-filter="pasta"]',
                    seasoning = '[data-filter="seasoning"]';

                //Remove clone
                $('.product-filter__filter').on('click', function(){
                    $('.products__results *').remove();
                });

                // Show all product
                $('.product-filter__filter'+all).on('click', function(){
                    $('.products .content').show();
                    $('.products__results').hide();
                });

                // Show sauce product
                $('.product-filter__filter'+sauce).on('click', function(){
                    $('.products__results').show();
                    $('.products .content').hide();
                    $('article'+sauce).clone().appendTo('.products__results').removeClass('extended-vertical').wrap('<div class="large-3 columns end"></div>');
                });

                // Show kit product
                $('.product-filter__filter'+kit).on('click', function(){
                    $('.products__results').show();
                    $('.products .content').hide();
                    $('article'+kit).clone().appendTo('.products__results').removeClass('extended-vertical').wrap('<div class="large-3 columns end"></div>');
                });

                // Show milk product
                $('.product-filter__filter'+milk).on('click', function(){
                    $('.products__results').show();
                    $('.products .content').hide();
                    $('article'+milk).clone().appendTo('.products__results').removeClass('extended-vertical').wrap('<div class="large-3 columns end"></div>');
                });

                // Show rice product
                $('.product-filter__filter'+rice).on('click', function(){
                    $('.products__results').show();
                    $('.products .content').hide();
                    $('article'+rice).clone().appendTo('.products__results').removeClass('extended-vertical').wrap('<div class="large-3 columns end"></div>');
                });

                // Show pasta product
                $('.product-filter__filter'+pasta).on('click', function(){
                    $('.products__results').show();
                    $('.products .content').hide();
                    $('article'+pasta).clone().appendTo('.products__results').removeClass('extended-vertical').wrap('<div class="large-3 columns end"></div>');
                });

                // Show seasoning product
                $('.product-filter__filter'+seasoning).on('click', function(){
                    $('.products__results').show();
                    $('.products .content').hide();
                    $('article'+seasoning).clone().appendTo('.products__results').removeClass('extended-vertical').wrap('<div class="large-3 columns end"></div>');
                });
            }
        },

        contactRequestToggle : {
            _init: function () {
                $('.request .title').on('click', function () {
                    $('.request').toggleClass('active');
                })
            }
        },

        verticalSlide: {

            _init: function () {
                var productViewHeight = $('.product-view__container .product-view__content').height(),
                    productViewWidth = $('.side-slider').width();

                $('.side-slider-content').height(productViewHeight);
                $('.hover-bottom, .hover-top').width(productViewWidth);
                this.mouseEnter();
                this.mouseLeave();
            },

            mouseEnter: function () {
                var hoverBottom = $('.hover-bottom'),
                    hoverTop = $('.hover-top'),
                    sideSlider = $(".side-slider");

                hoverBottom.on('mouseenter', function(){
                    sideSlider.animate({ scrollTop: $('.side-slider-content').height() }, 4000);
                });
                hoverTop.on('mouseenter', function(){
                    sideSlider.animate({ scrollTop: -$('.side-slider-content').height() }, 4000);
                });
            },

            mouseLeave: function () {
                $('.hover-bottom, .hover-top').on('mouseleave', function(){
                    $(".side-slider").animate().stop();
                });
            }
        },

        parralaxBlogList: {

            _init: function () {
                this.onScroll();
            },

            onScroll: function () {
                $(window).on('scroll', function(){
                    var scrolledY = $(window).scrollTop(),
                        scrolledYLastOrnament = scrolledY-1400,
                        ornament1 = $('.ornament-1'),
                        ornament2 = $('.ornament-2'),
                        ornament3 = $('.ornament-3'),
                        ornament4 = $('.ornament-4');

                    ornament1.css('transform','translateX(' + ((scrolledY*0.15)) + 'px)');
                    ornament2.css('transform','translateX(-' + ((scrolledY*0.15)) + 'px)');
                    if(scrolledY > 1200){
                        ornament3.css('transform','translateX(-' + ((scrolledYLastOrnament*0.15)) + 'px)');
                        ornament4.css('transform','translateX(' + ((scrolledYLastOrnament*0.22)) + 'px)');
                    }
                });
            }
        },

        blogArticleAnimateTrigger: {

            _init: function () {
                this.onScroll();
            },

            onScroll: function () {
                $(window).on('scroll', function(){
                    var content1 = $(".article-content-1 .text-content").offset().top - $(window).scrollTop(),
                        content2 = $(".article-content-2 .text-content").offset().top - $(window).scrollTop(),
                        content4 = $(".article-content-4 .text-content").offset().top - $(window).scrollTop(),
                        content5 = $(".article-content-5 .text-content").offset().top - $(window).scrollTop();

                    if(content1 < 400){
                        $(".article-content-1 .text-content").addClass('animated zoomIn').css('opacity', '1');
                    }
                    if(content2 < 400){
                        $(".article-content-2 .text-content").addClass('animated swing');
                    }
                    if(content4 < 400){
                        $(".article-content-4 .text-content").addClass('animated zoomIn').css('opacity', '1');
                    }
                    if(content5 < 400){
                        $(".article-content-5 .text-content").addClass('animated swing');
                    }
                });
            }
        }

    }
}