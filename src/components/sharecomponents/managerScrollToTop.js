import React, { Component } from "react";

export default class BKScrollToTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
          is_visible: false
        };
    }

    componentDidMount() {
        var scrollComponent = this;
        document.addEventListener("scroll", function(e) {
            scrollComponent.toggleVisibility();
        });
    }

    toggleVisibility() {
        if (window.pageYOffset > 100) {
        this.setState({
            is_visible: true
        });
        } else {
        this.setState({
            is_visible: false
        });
        }
    }

    bkscrollToTop() {
        window.scrollTo({
        top: 0,
        behavior: "smooth"
        });
    }

    render() {
        const { is_visible } = this.state;

        return (

          <div className="scroll-to-top rounded">
            {is_visible && (
              <div onClick={() => this.bkscrollToTop()}>
                <i className="fas fa-angle-up"></i>
              </div>
            )}
           
          </div>
          
        );
    }
    
}