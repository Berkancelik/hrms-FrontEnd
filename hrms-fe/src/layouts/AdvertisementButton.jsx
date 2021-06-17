import React from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
export default function JobPostButton() {
    return (
        <div>
            <Link to="/jobadvertisementadd"> <Button primary style={{marginTop:'0.8em'}}>İş ilanı yayınla</Button></Link>
        </div>
    )
}