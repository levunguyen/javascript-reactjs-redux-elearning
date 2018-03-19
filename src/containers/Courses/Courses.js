import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../assets/css/Tooltip.css';

import classes from './Courses.css';
import IconSearch from '../../assets/images/icon-pen.svg';
import IconSetting from '../../assets/images/icon-settings.svg';
import IconList from '../../assets/images/icon-list.svg';
import IconGrid from '../../assets/images/icon-grid.svg';
import CourseCardItem from '../../components/CourseCardItem/CourseCardItem';
import Aux from '../../hoc/AuxReact/AuxReact';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import axios from '../../axios-elearning';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';

class Courses extends Component {
    // state = {
    //     coursespage: {
    //         title: 'Courses',
    //         imageUrl: 'https://i.imgur.com/DCP0DZJ.png',
    //         directories: ['Home', 'Courses']
    //     },
    //     cartAmount: '1',
    //     courses: [
    //         {
    //             title: 'Java Spring',
    //             imageUrl: 'http://nulledlab.com/wp-content/uploads/2016/08/Create-Website-With-Bootstrap-4-Full-Video-Course.jpg',
    //             author: 'Spectre',
    //             avatarUrl: 'https://vi.seaicons.com/wp-content/uploads/2016/10/Comics-Spiderman-Morales-icon.png',
    //             price: 30,
    //             courseTime: 8,
    //             lastUpdated: '12/12/2018',
    //             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at porttitor vehicula. Nullam augue augue.'
    //         },
    //         {
    //             title: 'Java Spring',
    //             imageUrl: 'http://nulledlab.com/wp-content/uploads/2016/08/Create-Website-With-Bootstrap-4-Full-Video-Course.jpg',
    //             author: 'Spectre',
    //             avatarUrl: 'https://vi.seaicons.com/wp-content/uploads/2016/10/Comics-Spiderman-Morales-icon.png',
    //             price: 30,
    //             courseTime: 8,
    //             lastUpdated: '12/12/2018',
    //             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at porttitor vehicula. Nullam augue augue.'
    //         },
    //         {
    //             title: 'Java Spring',
    //             imageUrl: 'http://nulledlab.com/wp-content/uploads/2016/08/Create-Website-With-Bootstrap-4-Full-Video-Course.jpg',
    //             author: 'Spectre',
    //             avatarUrl: 'https://vi.seaicons.com/wp-content/uploads/2016/10/Comics-Spiderman-Morales-icon.png',
    //             price: 30,
    //             courseTime: 8,
    //             lastUpdated: '12/12/2018',
    //             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at porttitor vehicula. Nullam augue augue.'
    //         },{
    //             title: 'Java Spring',
    //             imageUrl: 'http://nulledlab.com/wp-content/uploads/2016/08/Create-Website-With-Bootstrap-4-Full-Video-Course.jpg',
    //             author: 'Spectre',
    //             avatarUrl: 'https://vi.seaicons.com/wp-content/uploads/2016/10/Comics-Spiderman-Morales-icon.png',
    //             price: 30,
    //             courseTime: 8,
    //             lastUpdated: '12/12/2018',
    //             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at porttitor vehicula. Nullam augue augue.'
    //         },{
    //             title: 'Java Spring',
    //             imageUrl: 'http://nulledlab.com/wp-content/uploads/2016/08/Create-Website-With-Bootstrap-4-Full-Video-Course.jpg',
    //             author: 'Spectre',
    //             avatarUrl: 'https://vi.seaicons.com/wp-content/uploads/2016/10/Comics-Spiderman-Morales-icon.png',
    //             price: 30,
    //             courseTime: 8,
    //             lastUpdated: '12/12/2018',
    //             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at porttitor vehicula. Nullam augue augue.'
    //         },{
    //             title: 'Java Spring',
    //             imageUrl: 'http://nulledlab.com/wp-content/uploads/2016/08/Create-Website-With-Bootstrap-4-Full-Video-Course.jpg',
    //             author: 'Spectre',
    //             avatarUrl: 'https://vi.seaicons.com/wp-content/uploads/2016/10/Comics-Spiderman-Morales-icon.png',
    //             price: 30,
    //             courseTime: 8,
    //             lastUpdated: '12/12/2018',
    //             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at porttitor vehicula. Nullam augue augue.'
    //         },
    //     ]
    // }

    constructor(props) {
        super(props);
        this.handleOnScroll = this.handleOnScroll.bind(this);
        this.state = {
            loading: false,
        }
    }


    loadEventBrowserBack() {
        if (this.props.indexPage === -1) {
            this.props.increasePage();
            this.props.fetchDatasIndexPage(0);
        }
    }

    componentDidMount() {
        this.loadEventBrowserBack();
        window.addEventListener('scroll', this.handleOnScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleOnScroll);

    }

    async fetchDatasFromIndexPage() {
        await this.props.fetchDatasIndexPage(this.props.indexPage);
    }

    async handleOnScroll() {
        var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        var scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
        var clientHeight = document.documentElement.clientHeight || window.innerHeight;
        var scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
        if (scrolledToBottom) {
            if (this.props.canLoad && !this.props.isLoading) {
                this.increaseIndexPage();
                this.props.changeValueLoading(true);
                await this.fetchDatasFromIndexPage();

            }
        }
    }

    increaseIndexPage = () => {
        this.props.increasePage();
    }

    // componentDidMount() {
    //     this.props.onFetchCourses();
    // }

    render() {
        return (
            <Aux>
                <Toolbar
                    imageUrl={this.props.coursesPage.imageUrl}
                    title={this.props.coursesPage.title}
                    cartAmount={this.props.cartAmount}
                    directories={this.props.coursesPage.directories} />
                <div className={classes.Height50} />
                <div className={classes.CoursesSection}>
                    <div className={classes.CoursesSectionClearfix}>
                        <div className={classes.SearchAndSettingSection}>
                            <div className={classes.SearchAndSettingContainer}>

                                <div className={classes.SearchSection}>
                                    <div className={classes.Height20} />
                                    <div className={classes.InputSection}>
                                        <div className={classes.InputContainer}>
                                            <img alt="Myicon" width="15" src={IconSearch} />
                                            <input className={classes.InputStyle} type="text" placeholder="Keyword" />
                                        </div>
                                    </div>
                                    <div className={classes.SearchContainer}>
                                        <div className={classes.SearchButtonStyle}>
                                            <a>SEARCH</a>
                                        </div>
                                    </div>
                                </div>

                                <div className={classes.SettingSection}>
                                    <div className={classes.Height20} />
                                    <div className={classes.SettingIconStyle}>
                                        <a className="hint--elearning" data-hint="Setting">
                                            <img alt="MyIcon" className={classes.FloatLeft} width="23" src={IconSetting} />
                                        </a>
                                    </div>
                                    <div className={classes.ListIconStyle}>
                                        <a className="hint--elearning" data-hint="List View">
                                            <img alt="MyIcon" className={classes.FloatLeft} width="23" src={IconList} />
                                        </a>
                                    </div>
                                    <div className={classes.GridIconStyle}>
                                        <a className="hint--elearning" data-hint="Grid View">
                                            <img alt="MyIcon" className={classes.FloatLeft} width="23" src={IconGrid} />
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className={classes.SectionWidth100Percentage}>
                            {this.props.courses.map((course, index) => (
                                <CourseCardItem
                                    key={index}
                                    courseId={course.id}
                                    imageUrl={'http://10.10.1.65/' + course.imageUrl}
                                    lastUpdated={'12/12/2018'}
                                    courseTime={8}
                                    courseTitle={course.courseName}
                                    courseDescription={course.description.substring(0, 130).trim() + '...'}
                                    authorAvatarUrl={'https://vi.seaicons.com/wp-content/uploads/2016/10/Comics-Spiderman-Morales-icon.png'}
                                    authorName={'Spectre'}
                                    price={course.price}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                {/* {(() => {
                    if (this.props.isLoading && this.props.canLoad) {
                        return (
                            <div className="data-loading">
                                <i className="fa fa-refresh fa-spin"></i>
                            </div>
                        );
                    } else {
                        return (
                            <div className="data-loading"></div>
                        );
                    }
                })()} */}
                <div className={classes.Height70} />
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        courses: state.coursesData.courses,
        coursesPage: state.coursesData.coursesPage,
        cartAmount: state.coursesData.cartAmount,
        indexPage: state.coursesData.indexPage,
        canLoad: state.coursesData.canLoad,
        isLoading: state.coursesData.isLoading,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchCourses: () => dispatch(actions.fetchCourses()),

        fetchDatasIndexPage: (indexPage) => {
            dispatch(actions.fetchDatasIndexPage(indexPage))
        },

        increasePage: () => {
            dispatch(actions.increasePage())
        },

        resetData: () => {
            dispatch(actions.resetData());
        },

        changeValueLoading: (isLoading) => {
            dispatch(actions.changeValueIsLoading(isLoading));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Courses, axios));
