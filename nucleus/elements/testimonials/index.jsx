/** @jsx React.DOM */
var React = require('react');
var Testimonials = {
    getInitialState: function(){
        return {
            slide: 0
        }
    },
    nextSlide: function(){
        this.setState({slide: this.state.slide + 1});
    },
    prevSlide: function(){
        this.setState({slide: this.state.slide - 1});
    },
    render: function(){
        var slides = [];
        var firstName, firstNames = ['Ion', 'Petru', 'Mihai', 'Mircea', 'Vlad'];
        var lastName, lastNames = ['Ionescu', 'Petrescu', 'Moldoveanu', 'Munteanu', 'Plahotniuc'];
        var location, locations  = ['Chisinau', 'Tiraspol', 'Balti', 'Cojusna', 'Iasi'];
        var text, texts = [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc venenatis odio sed odio condimentum porttitor. Nunc nec adipiscing nisl. Mauris sollicitudin facilisis mauris. Quisque id magna tincidunt, mollis leo a, vehicula ligula. Proin dapibus nibh a fermentum luctus. Phasellus aliquet fringilla magna vel venenatis. Nulla facilisi. Vivamus mattis nisl id nibh sagittis gravida. Cras purus nulla, gravida ac orci a, lobortis volutpat arcu.",
            "Sed in tempor eros. Suspendisse dolor lectus, sagittis sed quam sit amet, lobortis sagittis lectus. Curabitur molestie vulputate augue a cursus. Sed rhoncus malesuada enim, vitae tristique diam euismod a. Fusce augue lorem, tempor sed massa nec, suscipit viverra ante. Nam turpis libero, faucibus imperdiet lectus sit amet, dignissim fringilla ligula. Donec eu lobortis tellus. Aenean consequat aliquam faucibus. Pellentesque lorem neque, dictum sed viverra id, varius tristique massa. In hac habitasse platea dictumst. Nunc non tempus arcu, eu porta neque.",
            "Etiam et dapibus ante, feugiat luctus lacus. Morbi ac felis ac erat pretium posuere nec vel urna. Sed suscipit quam eget nulla interdum molestie. In consectetur sem in lacus fermentum suscipit. Integer consequat interdum nisl, et aliquet eros vestibulum ut. Ut accumsan, nulla id fringilla vehicula, metus libero ultricies sem, sed semper libero urna vel velit. Nulla posuere est sit amet dapibus porttitor.",
            "Donec ut orci ullamcorper, volutpat lacus posuere, sagittis erat. Suspendisse ut tempus purus. Etiam fermentum neque tempor, bibendum nulla ac, vehicula odio. Sed at lacinia turpis, ac feugiat justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam tristique enim eu fermentum aliquet. Mauris condimentum diam sit amet tortor pharetra, vitae mattis risus tempor. Nullam posuere, nisl id convallis varius, quam mauris vulputate nulla, nec tempus arcu dui ac risus. Suspendisse elementum metus ipsum, non malesuada arcu luctus ut. Donec nec nisl fringilla, posuere mi quis, porttitor quam. Donec quis consequat nisi.",
            "Phasellus a condimentum lacus, quis bibendum ligula. Morbi laoreet lectus lacus, viverra porta ante facilisis vitae. Aenean et risus eu elit tincidunt dapibus vel eu dolor. Vivamus iaculis dignissim suscipit. Praesent consectetur tempus nulla, at adipiscing urna congue sit amet. Nam placerat mattis nibh in vehicula. Integer at purus in arcu molestie facilisis. Nunc placerat condimentum dui. Aenean mollis aliquam varius. Praesent scelerisque sagittis sem ac faucibus."
        ];
        var i;
        for(i = 0; i < 20; i++){
            slides.push({
                name: firstNames[Math.floor(Math.random() * 5)] + ' ' + lastNames[Math.floor(Math.random() * 5)],
                location: locations[Math.floor(Math.random() * 5)],
                text: texts[Math.floor(Math.random() * 5)]
            })
        }
        var slide = slides[this.state.slide];
        return (
            <article className="post-1122 type-page">
                <header className="entry-header">
                    <div className="testimonials-header">
                        <span className="monstro-page-name">about</span>
                        <h2 className="monstro-subpage-name">Testimonials</h2>
                        <p className="testimonials-description">Nullam quis risus eget urna mollis ornare vel eu leo.
                        Nullam id dolor id nibh ultricies vehicula ut id elit. Fusce dapibus, tellus ac cursus
                        commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec
                        id elit non mi porta gravida at eget metus. Praesent commodo cursus.
                        magna, vel scelerisque nisl consectetur et. Maecenas faucibus mollis interdum.
                        Cras mattis consectetur purus sit amet fermentum.</p>
                    </div>
                </header>

                <section className="entry-content testimonials">
                    <div id="testimonials-slider">
                        <ul>
                            <li className="blockquote">
                            {slide.text}
                                <div className="author">
                                    <div className="slider-name">{slide.name}</div>
                                    <div className="slider-location">{slide.location}</div>
                                    <a href="javascript:void(0);" className="control_next" onClick={this.nextSlide}>&#62;</a>
                                    <a href="javascript:void(0);" className="control_prev" onClick={this.prevSlide}>&#60;</a>
                                </div>
                            </li>

                        </ul>
                    </div>
                </section>

                <footer className="entry-footer">
                    <a href="#">
                        <div className="testimonials-feedback">
                            <p>Write Your Feedback</p>
                        </div>
                    </a>
                </footer>
            </article>

        )
    }
};

module.exports = {
    Class: Testimonials,
    Component: React.createClass(Testimonials)
};