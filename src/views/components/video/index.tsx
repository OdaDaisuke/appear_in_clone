import * as React from 'react'
import styled from 'styled-components'
import SkyWayClient from '../../../infra/skyway'

interface IVideoProps {
    width: number
    height: number
}

export default class Video extends React.Component<IVideoProps, any> {

    constructor(props: any) {
        super(props)
        this.state = {
            videoRef: null,
        }

        this.setVideo = this.setVideo.bind(this)
    }

    async setVideo(e) {
        this.setState({ videoRef: e })
        const wr = new SkyWayClient(null)
        await wr.init()

        e.srcObject = wr.stream
    }

    render() {
        return (
            <video
                autoPlay
                ref={this.setVideo}
                src={this.state.stream}
                width={this.props.width}
                height={this.props.height}>
            </video>
        )
    }
}