import React, { Component } from "react";

export default class BKScrollToTop extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
          is_visible: false
        };
    }
    

    componentDidMount() {
        this._isMounted = true;
        var scrollTop = this;
        document.addEventListener("scroll", function(e) {
          scrollTop.toggleVisibility();
        });
    }

    componentWillUnmount(){
      this._isMounted = false;
    }

    toggleVisibility = () => {
      if(this._isMounted ){
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
    }

    bkscrollToTop = () => {
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