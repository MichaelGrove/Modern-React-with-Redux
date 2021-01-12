import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'

import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    avatar={faker.image.animals()}
                    timeAgo="Today at 4:45PM"
                    comment={faker.lorem.sentence()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    avatar={faker.image.animals()}
                    timeAgo="Today at 2:00AM"
                    comment={faker.lorem.sentence()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Jane"
                    avatar={faker.image.animals()}
                    timeAgo="Yesterday at 5:00PM"
                    comment={faker.lorem.sentence()}
                />
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));