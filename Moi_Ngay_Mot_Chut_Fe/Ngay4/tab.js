class Tab{
    constructor(tabSelector, options){
        // Lấy class .tab-container
        this.tabSelector = tabSelector;
        // cho 1 mảng các options để lấy các class cần dùng
        this.options = Object.assign({
            action: 'click',
            tabButtons: '.title',
            tabContents: '.content',
            activeClass: 'active'
        }, options);
        // Lấy class .active
        this.className = this.options.activeClass;
    }
    
    addClass(dom){
        dom.classList.add(this.className);
    }

    removeClass(domList){
        domList.forEach(dom => dom.classList.remove(this.className));
    }

    switch () {
        var tabWrapper = document.querySelector(this.tabSelector);
        var buttons = tabWrapper.querySelectorAll(this.options.tabButtons);
        var contents = tabWrapper.querySelectorAll(this.options.tabContents);
        
        buttons.forEach((btn, index) => {
            btn.addEventListener(this.options.action, () =>{
                this.removeClass(buttons);
                this.addClass(buttons[index]);
                this.removeClass(contents);
                this.addClass(contents[index]);
            }); 
        });
    }
}

new Tab('.tab-container', {}).switch();