import * as React from 'react'
import styled from 'styled-components'
import SkyWayClient from '../../../infra/skyway'

interface IVideoProps {
    width: number
    height: number
}

interface IVideoState {
    videoRef: any
    stream: MediaStream
}

export default class Video extends React.Component<IVideoProps, IVideoState> {
    constructor(props: any) {
        super(props)
        this.state = {
            videoRef: null,
            stream: null,
        }

        this.setVideo = this.setVideo.bind(this)
        this.setSpeechRecognition()
    }

    async setVideo(e) {
        this.setState({
            videoRef: e,
            stream: await navigator.mediaDevices.getUserMedia({
                video: true,
                audio: true
            })
        })

        e.srcObject = this.state.stream
    }

    setSpeechRecognition() {
        // const recognition = new webkitSpeechRecognition()
        // recognition.lang = 'ja-JP'
        // recognition.maxAlternatives = 3

        // setTimeout( () => {
        //     recognition.stop()
        // }, 5000)

        // recognition.addEventListener('result', e => {
        //     console.log(e)
        // })
    }

    render() {

        return (
            <video
                autoPlay
                ref={this.setVideo}
                width={this.props.width}
                height={this.props.height}
                style={ { filter: 'contrast(80%)' } }
            >
            </video>
        )
    }
}