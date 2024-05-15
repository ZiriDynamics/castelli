'use client'

import { useEffect, useRef } from 'react';
import styles from './login.module.css';

export default function Login({setOpen} : {setOpen: (open: boolean) => void}) {

    const modal = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = modal.current;
        if (dialog) {
            dialog.showModal();
        }
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                e.preventDefault();
                e.stopPropagation();
                setOpen(false);
            }
        }

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }

    }, [modal]);
    
    const handleSubmit = (e: React.FormEvent) => {
        // i want the default behaviour of setting the search params and refreshing the page
        // but i want clear any # hash in the url
        e.preventDefault();
        window.location.hash = '';
        const formData = new FormData(e.currentTarget as HTMLFormElement);
        let params = new URLSearchParams();
        Object.keys(Object.fromEntries(formData)).forEach(key => {
            params.append(key, formData.get(key) as string);
        });
        window.location.search = params.toString();
        setOpen(false);
    }

    return (
        <dialog className={styles.dialog} ref={modal}>
            <button className={styles.close} onClick={() => setOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m480-437.847 122.924 122.923q8.307 8.308 20.884 8.5 12.576.193 21.268-8.5 8.693-8.692 8.693-21.076t-8.693-21.076L522.153-480l122.923-122.924q8.308-8.307 8.5-20.884.193-12.576-8.5-21.268-8.692-8.693-21.076-8.693t-21.076 8.693L480-522.153 357.076-645.076q-8.307-8.308-20.884-8.5-12.576-.193-21.268 8.5-8.693 8.692-8.693 21.076t8.693 21.076L437.847-480 314.924-357.076q-8.308 8.307-8.5 20.884-.193 12.576 8.5 21.268 8.692 8.693 21.076 8.693t21.076-8.693L480-437.847Zm.067 337.846q-78.836 0-148.204-29.92-69.369-29.92-120.682-81.21-51.314-51.291-81.247-120.629-29.933-69.337-29.933-148.173t29.92-148.204q29.92-69.369 81.21-120.682 51.291-51.314 120.629-81.247 69.337-29.933 148.173-29.933t148.204 29.92q69.369 29.92 120.682 81.21 51.314 51.291 81.247 120.629 29.933 69.337 29.933 148.173t-29.92 148.204q-29.92 69.369-81.21 120.682-51.291 51.314-120.629 81.247-69.337 29.933-148.173 29.933ZM480-160q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" fill='currentColor'/></svg>
            </button>
            <svg className={styles.logo} viewBox="0 0 556 212" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="556" height="212" />
                <path d="M330.711 40.792H327.541C303.301 40.792 279.051 40.792 254.811 40.792C250.721 40.792 250.661 40.732 250.661 36.562C250.661 32.142 250.651 27.732 250.661 23.312C250.671 20.072 250.851 19.882 254.031 19.882C265.781 19.872 277.521 19.882 289.271 19.882C310.761 19.882 332.261 19.852 353.751 19.902C361.761 19.922 366.821 27.162 363.711 34.362C362.681 36.732 360.761 38.762 359.061 40.802C343.521 59.492 327.941 78.152 312.391 96.822C303.281 107.762 294.191 118.722 285.101 129.672C284.801 130.042 284.611 130.502 284.111 131.362C285.521 131.492 286.601 131.692 287.691 131.692C311.931 131.712 336.181 131.702 360.421 131.702C363.208 131.702 364.601 133.132 364.601 135.992C364.601 140.572 364.541 145.162 364.631 149.742C364.671 151.622 364.141 152.392 362.111 152.382C328.371 152.332 294.631 152.362 260.881 152.322C256.661 152.322 253.511 150.242 251.721 146.482C249.821 142.492 250.461 138.662 253.261 135.272C259.721 127.432 266.211 119.622 272.711 111.812C282.611 99.912 292.541 88.042 302.441 76.142C311.381 65.392 320.311 54.632 329.241 43.862C329.861 43.112 330.401 42.302 330.981 41.522C330.891 41.282 330.791 41.042 330.701 40.792H330.711Z" fill="currentColor" />
                <path d="M425.591 90.2419C425.591 70.9919 425.591 51.7519 425.591 32.5019C425.591 24.1419 429.851 19.8719 438.181 19.8719C456.921 19.8719 475.671 19.8719 494.411 19.8719C497.921 19.8719 497.931 19.8819 497.931 23.3019C497.931 28.1319 497.851 32.9719 497.971 37.8019C498.031 40.0719 497.261 40.8519 494.951 40.8419C479.961 40.7619 464.961 40.8019 449.971 40.8019C446.541 40.8019 446.471 40.8619 446.471 44.2919C446.471 79.0319 446.471 113.782 446.471 148.522C446.471 151.069 445.191 152.342 442.631 152.342C437.971 152.342 433.301 152.222 428.641 152.392C426.181 152.482 425.551 151.592 425.561 149.232C425.641 129.572 425.611 109.902 425.611 90.2419H425.591Z" fill="currentColor" />
                <path d="M69.2911 117.902C65.4411 121.542 60.9311 125.812 56.2711 130.232C53.0811 127.122 49.5011 123.672 45.9511 120.182C37.2911 111.662 28.5911 103.172 20.0011 94.582C15.4311 90.002 16.2111 82.822 21.4511 79.542C25.3911 77.082 29.9811 77.692 33.7411 81.312C37.8811 85.292 42.0211 89.272 46.0011 93.412C53.7411 101.432 61.3611 109.562 69.2811 117.902H69.2911Z" fill="currentColor" />
                <path d="M405.601 89.9919C405.601 109.652 405.601 129.302 405.601 148.962C405.601 152.332 405.581 152.342 402.321 152.342C397.411 152.342 392.491 152.242 387.581 152.382C385.271 152.452 384.581 151.652 384.591 149.372C384.671 132.052 384.631 114.722 384.631 97.4019C384.631 75.4919 384.651 53.5919 384.611 31.6819C384.611 28.0919 385.431 24.9119 388.221 22.4919C391.581 19.5819 395.361 19.0419 399.391 20.8119C403.461 22.5919 405.471 25.8819 405.581 30.2619C405.681 34.4219 405.611 38.5919 405.611 42.7519C405.611 58.4919 405.611 74.2319 405.611 89.9819L405.601 89.9919Z" fill="currentColor" />
                <path d="M539.081 89.8419C539.081 109.502 539.081 129.172 539.081 148.832C539.081 152.332 539.061 152.342 535.661 152.342C530.831 152.342 525.991 152.242 521.171 152.392C518.851 152.462 518.141 151.652 518.161 149.382C518.251 138.222 518.201 127.052 518.201 115.892C518.201 87.8119 518.211 59.7319 518.191 31.6519C518.191 27.6019 519.121 24.0419 522.731 21.6819C526.061 19.5119 529.651 19.1019 533.181 20.9219C537.001 22.9019 539.111 26.1119 539.101 30.5919C539.071 50.3419 539.091 70.0819 539.091 89.8319L539.081 89.8419Z" fill="currentColor" />
                <path d="M88.5711 139.192V158.482C84.3611 158.482 80.0711 158.442 75.7811 158.482C62.8711 158.632 49.9611 158.862 37.0511 158.922C34.9311 158.932 32.6711 158.632 30.7311 157.842C26.8011 156.252 24.6911 151.652 25.5511 147.512C26.4711 143.082 29.9711 139.982 34.4911 139.862C42.7311 139.652 50.9811 139.552 59.2211 139.422C68.5511 139.272 77.8711 139.142 87.2011 139.012C87.5311 139.012 87.8511 139.082 88.5711 139.172V139.192Z" fill="currentColor" />
                <path d="M139.291 123.192H158.281C158.281 124.782 158.271 126.332 158.281 127.882C158.441 143.952 158.651 160.012 158.731 176.082C158.771 184.092 151.041 188.842 144.361 184.982C140.941 183.002 139.631 179.832 139.601 175.962C139.541 168.392 139.361 160.812 139.291 153.242C139.201 143.752 139.171 134.252 139.121 124.762C139.121 124.352 139.201 123.942 139.291 123.192Z" fill="currentColor" />
                <path d="M117.201 141.842C121.641 146.102 126.141 150.402 130.841 154.912C127.391 158.522 124.011 162.062 120.621 165.582C111.741 174.832 102.871 184.102 93.9511 193.312C89.9511 197.432 84.2711 197.682 80.3211 194.062C76.2811 190.352 76.0311 184.572 80.1111 180.272C92.2011 167.522 104.411 154.882 116.571 142.202C116.681 142.092 116.851 142.032 117.201 141.832V141.842Z" fill="currentColor" />
                <path d="M72.4111 88.5719H53.2711C53.2711 84.3219 53.3211 80.0419 53.2711 75.7619C53.1111 63.3619 52.8911 50.9619 52.7411 38.5719C52.7211 36.8319 52.6711 35.0419 53.0511 33.3719C54.1611 28.5919 58.6311 25.4819 63.2411 26.0519C68.1611 26.6619 71.7111 30.5119 71.8111 35.5219C72.0411 48.1719 72.2411 60.8119 72.4111 73.4619C72.4811 78.3519 72.4211 83.2519 72.4211 88.5819L72.4111 88.5719Z" fill="currentColor" />
                <path d="M123.251 72.622V53.372C126.721 53.372 130.191 53.432 133.661 53.362C147.481 53.092 161.301 52.772 175.111 52.492C179.381 52.402 182.811 53.992 184.731 57.942C187.821 64.292 183.421 71.362 176.221 71.592C168.321 71.842 160.411 71.962 152.501 72.112C143.681 72.292 134.851 72.452 126.031 72.612C125.221 72.632 124.411 72.612 123.251 72.612V72.622Z" fill="currentColor" />
                <path d="M141.991 93.9819C146.201 90.1719 150.811 85.9819 155.631 81.6119C157.901 83.8219 160.741 86.5719 163.581 89.3319C173.311 98.7919 183.051 108.232 192.761 117.712C195.711 120.592 196.641 124.052 195.251 127.972C193.931 131.692 191.191 133.782 187.291 134.242C184.091 134.622 181.431 133.382 179.171 131.182C170.101 122.362 160.991 113.582 151.981 104.692C148.611 101.362 145.501 97.7819 141.971 93.9819H141.991Z" fill="currentColor" />
                <path d="M94.3911 70.0319C90.0711 65.5019 85.7711 60.9919 80.7611 55.7319C85.8611 50.9319 91.3111 46.0219 96.5111 40.8719C103.561 33.9019 110.421 26.7419 117.371 19.6819C120.311 16.6919 123.711 15.0819 127.961 16.5519C131.771 17.8619 134.031 20.5419 134.501 24.5719C134.861 27.6619 133.801 30.2819 131.631 32.4919C123.281 40.9919 114.971 49.5219 106.601 58.0019C102.681 61.9719 98.6611 65.8319 94.3811 70.0319H94.3911Z" fill="currentColor" />
                <path d="M407.981 177.302C406.511 179.482 405.051 181.662 403.271 184.312C401.511 181.752 400.001 179.552 398.081 176.752C397.811 178.172 397.561 178.982 397.531 179.792C397.471 181.962 397.441 184.132 397.531 186.292C397.591 187.972 397.251 188.952 395.231 188.912C393.331 188.882 393.071 187.922 393.081 186.382C393.131 181.302 393.051 176.212 393.141 171.132C393.161 170.212 393.671 168.582 394.121 168.522C395.731 168.312 397.631 167.612 398.851 169.592C400.181 171.762 401.581 173.892 403.261 176.532C404.801 174.152 406.071 172.262 407.281 170.332C408.391 168.552 410.781 167.602 412.581 168.472C413.021 168.682 413.421 169.482 413.431 170.012C413.491 175.682 413.441 181.342 413.491 187.012C413.501 188.682 412.541 188.872 411.221 188.882C409.901 188.882 408.931 188.722 408.981 187.022C409.051 184.692 409.021 182.352 408.981 180.022C408.961 179.152 408.801 178.282 408.701 177.412C408.461 177.372 408.221 177.332 407.991 177.292L407.981 177.302Z" fill="currentColor" />
                <path d="M326.341 177.482C326.341 180.502 326.281 183.532 326.361 186.552C326.411 188.272 325.761 188.912 324.031 188.902C322.361 188.902 321.631 188.422 321.651 186.622C321.731 181.462 321.631 176.302 321.721 171.142C321.741 170.212 322.361 168.502 322.631 168.512C324.091 168.582 326.001 168.632 326.881 169.542C329.121 171.852 330.901 174.612 332.871 177.192C333.411 177.892 333.991 178.552 334.551 179.242L335.451 179.092C335.451 177.272 335.451 175.452 335.451 173.632C335.451 172.712 335.491 171.802 335.451 170.882C335.361 169.282 335.571 168.222 337.681 168.252C339.651 168.282 340.051 169.072 340.021 170.812C339.941 175.892 340.051 180.972 339.951 186.042C339.931 186.962 339.211 188.682 338.961 188.652C337.591 188.512 335.821 188.332 335.011 187.432C332.631 184.772 330.651 181.772 328.511 178.912C328.091 178.352 327.621 177.842 327.171 177.302L326.331 177.472L326.341 177.482Z" fill="currentColor" />
                <path d="M252.031 168.522C255.861 168.522 259.381 168.132 262.781 168.612C268.241 169.382 271.261 173.802 270.921 179.622C270.621 184.592 266.551 188.512 261.171 188.832C258.771 188.972 256.351 188.982 253.951 188.792C253.271 188.742 252.131 187.782 252.121 187.222C251.991 181.092 252.041 174.952 252.041 168.522H252.031ZM256.621 184.942C257.911 184.942 258.731 184.912 259.541 184.942C262.351 185.082 264.511 183.822 265.521 181.332C266.431 179.092 266.441 176.642 264.751 174.522C262.941 172.252 260.501 171.772 257.831 172.082C257.391 172.132 256.681 172.872 256.671 173.312C256.581 177.102 256.621 180.892 256.621 184.932V184.942Z" fill="currentColor" />
                <path d="M376.831 188.452C372.751 189.312 372.331 189.192 371.011 186.112C370.421 184.742 369.611 184.162 368.181 184.242C367.181 184.292 366.171 184.342 365.191 184.242C362.921 183.992 361.461 184.702 360.631 187.022C359.861 189.172 359.101 189.272 355.531 188.402C356.641 185.632 357.701 182.902 358.821 180.192C360.121 177.042 361.461 173.912 362.801 170.782C363.451 169.262 364.251 168.192 366.291 168.252C368.241 168.312 368.851 169.402 369.451 170.832C371.871 176.642 374.311 182.442 376.821 188.452H376.831ZM363.701 179.992H368.501C367.671 178.102 367.061 176.702 366.441 175.292C366.211 175.322 365.971 175.352 365.741 175.382C365.131 176.762 364.511 178.142 363.691 179.992H363.701Z" fill="currentColor" />
                <path d="M495.261 168.062C496.861 168.482 498.501 168.772 500.031 169.362C501.021 169.742 502.451 170.262 501.541 171.882C500.821 173.152 500.041 174.362 498.211 173.272C497.301 172.722 496.181 172.062 495.231 172.162C494.201 172.272 493.251 173.202 492.261 173.782C492.951 174.482 493.521 175.442 494.361 175.822C495.941 176.542 497.721 176.792 499.321 177.472C501.631 178.462 503.101 180.112 502.971 182.862C502.831 185.642 501.361 187.402 498.881 188.262C495.291 189.502 491.781 188.982 488.561 187.062C487.941 186.692 487.221 185.302 487.451 184.912C488.101 183.792 488.841 182.412 490.781 183.342C492.381 184.102 494.171 184.602 495.931 184.812C496.601 184.892 497.411 183.822 498.161 183.282C497.551 182.602 497.061 181.682 496.301 181.292C495.211 180.732 493.931 180.552 492.731 180.212C488.851 179.102 487.101 176.942 487.471 173.722C487.851 170.402 490.451 168.392 494.451 168.332C494.701 168.332 494.951 168.332 495.201 168.332C495.221 168.242 495.251 168.152 495.271 168.072L495.261 168.062Z" fill="currentColor" />
                <path d="M463.571 167.942C465.541 168.512 467.541 168.982 469.461 169.692C470.461 170.062 471.561 170.862 470.511 172.142C469.701 173.132 469.011 174.862 467.171 173.532C465.041 171.992 462.881 171.492 460.481 173.052C458.041 174.642 457.031 177.472 457.911 180.762C458.531 183.082 460.881 185.042 463.491 184.932C464.801 184.872 466.181 184.212 467.341 183.512C469.141 182.422 470.131 183.562 470.721 184.782C470.961 185.282 470.201 186.712 469.521 187.162C464.761 190.332 458.201 189.232 454.701 184.822C451.391 180.642 451.971 174.782 456.111 170.862C458.161 168.922 460.671 168.232 463.551 167.942H463.571Z" fill="currentColor" />
                <path d="M286.281 168.682C290.971 167.842 291.281 168.002 293.291 171.522C294.091 172.932 295.001 174.272 296.141 176.092C297.391 174.082 298.361 172.592 299.271 171.052C301.071 168.002 301.751 167.732 305.881 168.802C304.211 171.462 302.781 174.172 300.941 176.572C298.661 179.542 297.941 182.772 298.341 186.362C298.601 188.652 297.301 189.212 295.491 188.782C294.781 188.612 293.671 187.552 293.751 187.072C294.721 181.312 291.571 177.072 288.721 172.692C287.921 171.462 287.201 170.182 286.291 168.682H286.281Z" fill="currentColor" />
                <path d="M528.681 168.822C531.341 168.822 534.011 168.872 536.671 168.802C538.301 168.762 539.131 169.282 539.101 171.082C539.031 176.492 539.051 181.902 539.081 187.312C539.081 188.902 538.411 189.552 536.831 189.542C531.341 189.502 525.851 189.502 520.351 189.542C518.711 189.552 518.181 188.762 518.191 187.232C518.231 181.822 518.231 176.412 518.191 171.002C518.171 169.372 518.891 168.782 520.451 168.802C523.201 168.852 525.941 168.812 528.691 168.812L528.681 168.822ZM528.821 186.132C529.601 184.732 530.271 184.082 530.281 183.422C530.311 181.682 530.851 180.842 532.741 180.812C533.381 180.802 534.371 179.902 534.571 179.222C534.951 177.902 534.081 177.232 532.721 177.332C531.041 177.452 530.381 176.732 530.241 175.022C530.191 174.382 529.171 173.562 528.441 173.352C528.081 173.252 526.951 174.342 526.911 174.932C526.821 176.612 526.181 177.262 524.511 177.422C523.911 177.472 523.001 178.462 522.971 179.062C522.941 179.642 523.841 180.762 524.371 180.792C526.171 180.882 526.851 181.572 526.901 183.382C526.921 184.072 527.811 184.742 528.811 186.132H528.821Z" fill="red" />
                <path d="M436.121 178.662C436.121 181.412 436.081 184.152 436.131 186.902C436.161 188.452 435.441 188.942 434.001 188.892C432.651 188.852 431.501 188.822 431.511 186.972C431.551 181.392 431.561 175.822 431.501 170.242C431.481 168.392 432.541 168.362 433.911 168.302C435.501 168.232 436.191 168.772 436.141 170.422C436.061 173.162 436.121 175.912 436.121 178.662Z" fill="currentColor" />
            </svg>
            <div className={styles.text}>
                Unlock your full product experience now and learn all about your circularity options.
            </div>
            <svg className={styles.bgIcon} viewBox="0 0 210 210" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M68.2911 116.902C64.4411 120.542 59.9311 124.812 55.2711 129.232C52.0811 126.122 48.5011 122.672 44.9511 119.182C36.2911 110.662 27.5911 102.172 19.0011 93.582C14.4311 89.002 15.2111 81.822 20.4511 78.542C24.3911 76.082 28.9811 76.692 32.7411 80.312C36.8811 84.292 41.0211 88.272 45.0011 92.412C52.7411 100.432 60.3611 108.562 68.2811 116.902H68.2911Z" fill="currentColor" />
                <path d="M87.5711 138.192V157.482C83.3611 157.482 79.0711 157.442 74.7811 157.482C61.8711 157.632 48.9611 157.862 36.0511 157.922C33.9311 157.932 31.6711 157.632 29.7311 156.842C25.8011 155.252 23.6911 150.652 24.5511 146.512C25.4711 142.082 28.9711 138.982 33.4911 138.862C41.7311 138.652 49.9811 138.552 58.2211 138.422C67.5511 138.272 76.8711 138.142 86.2011 138.012C86.5311 138.012 86.8511 138.082 87.5711 138.172V138.192Z" fill="currentColor" />
                <path d="M138.291 122.192H157.281C157.281 123.782 157.271 125.332 157.281 126.882C157.441 142.952 157.651 159.012 157.731 175.082C157.771 183.092 150.041 187.842 143.361 183.982C139.941 182.002 138.631 178.832 138.601 174.962C138.541 167.392 138.361 159.812 138.291 152.242C138.201 142.752 138.171 133.252 138.121 123.762C138.121 123.352 138.201 122.942 138.291 122.192Z" fill="currentColor" />
                <path d="M116.201 140.842C120.641 145.102 125.141 149.402 129.841 153.912C126.391 157.522 123.011 161.062 119.621 164.582C110.741 173.832 101.871 183.102 92.9511 192.312C88.9511 196.432 83.2711 196.682 79.3211 193.062C75.2811 189.352 75.0311 183.572 79.1111 179.272C91.2011 166.522 103.411 153.882 115.571 141.202C115.681 141.092 115.851 141.032 116.201 140.832V140.842Z" fill="currentColor" />
                <path d="M71.4111 87.5719H52.2711C52.2711 83.3219 52.3211 79.0419 52.2711 74.7619C52.1111 62.3619 51.8911 49.9619 51.7411 37.5719C51.7211 35.8319 51.6711 34.0419 52.0511 32.3719C53.1611 27.5919 57.6311 24.4819 62.2411 25.0519C67.1611 25.6619 70.7111 29.5119 70.8111 34.5219C71.0411 47.1719 71.2411 59.8119 71.4111 72.4619C71.4811 77.3519 71.4211 82.2519 71.4211 87.5819L71.4111 87.5719Z" fill="currentColor" />
                <path d="M122.251 71.622V52.372C125.721 52.372 129.191 52.432 132.661 52.362C146.481 52.092 160.301 51.772 174.111 51.492C178.381 51.402 181.811 52.992 183.731 56.942C186.821 63.292 182.421 70.362 175.221 70.592C167.321 70.842 159.411 70.962 151.501 71.112C142.681 71.292 133.851 71.452 125.031 71.612C124.221 71.632 123.411 71.612 122.251 71.612V71.622Z" fill="currentColor" />
                <path d="M140.991 92.9819C145.201 89.1719 149.811 84.9819 154.631 80.6119C156.901 82.8219 159.741 85.5719 162.581 88.3319C172.311 97.7919 182.051 107.232 191.761 116.712C194.711 119.592 195.641 123.052 194.251 126.972C192.931 130.692 190.191 132.782 186.291 133.242C183.091 133.622 180.431 132.382 178.171 130.182C169.101 121.362 159.991 112.582 150.981 103.692C147.611 100.362 144.501 96.7819 140.971 92.9819H140.991Z" fill="currentColor" />
                <path d="M93.3911 69.0319C89.0711 64.5019 84.7711 59.9919 79.7611 54.7319C84.8611 49.9319 90.3111 45.0219 95.5111 39.8719C102.561 32.9019 109.421 25.7419 116.371 18.6819C119.311 15.6919 122.711 14.0819 126.961 15.5519C130.771 16.8619 133.031 19.5419 133.501 23.5719C133.861 26.6619 132.801 29.2819 130.631 31.4919C122.281 39.9919 113.971 48.5219 105.601 57.0019C101.681 60.9719 97.6611 64.8319 93.3811 69.0319H93.3911Z" fill="currentColor" />
            </svg>
            <div className={styles.text2}>
                Add the product to your wardrobe now.
            </div>
            <div className={styles.text3}>
                All we need from you is three things:
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input type="text" placeholder="Full name" name="name" required />
                <input type="email" placeholder="Email" name="email" required />
                <label className={styles.iOwnThisProduct}>
                    <input type='checkbox' required />
                    <div>
                        <div className={styles.iOwnThisProductText}>
                            Yes, I own this product.
                        </div>
                        <div className={styles.iOwnThisProductText2}>
                            What does that mean? <a href="">Learn more</a>
                        </div>
                    </div>
                </label>
                <button className={styles.submit} type="submit">REGISTER NOW!</button>
            </form>
            <div className={styles.terms}>
                By clicking on "REGISTER NOW!" you accept our <a href="">Terms and Conditions</a> and <a href="">Privacy Policy</a>
            </div>
        </dialog>
    );
}