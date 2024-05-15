import { useSearchParams } from 'next/navigation';
import styles from './testimonials.module.css';

export default function Testimonials() {
    const searchParams = useSearchParams();
    const name = searchParams.get('name');
    const email = searchParams.get('email');
    if (!name || !email) return null;

    const data = [
    {
        name: 'Dimitris L.',
        certifiedUser: true,
        starRating: 4.5,
        image: '/man1.png',
        title: 'Like wearing the jacket',
        review: 'The jacket kept me warm and dry on my 8 hour hike in the worst conditions. I recommend them. It is easy to wash.',
    },
    {
        name: 'Michael Z.',
        certifiedUser: true,
        starRating: 5,
        image: '/man2.png',
        title: 'Comfortable',
        review: 'Good quality, lots of useful features. Holds up even in strong winds, the fabric is very robust. I would buy again I am convinced of the brand.',
    },
    {
        name: 'Jon S.',
        certifiedUser: true,
        starRating: 3,
        image: '/man3.png',
        title: 'Good quality, a bit tight',
        review: 'Quite nice, but I find the jacket in the hip area too narrow for me.',
    },
    ]

    const renderStars = (rating : number) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <svg key={i} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m480-292.463-155.615 93.845q-8.692 5.077-17.422 4.27-8.731-.808-15.808-5.885-7.076-5.077-10.922-13.269-3.847-8.192-1.231-18.115l41.307-176.691-137.384-118.923q-7.692-6.692-9.807-15.499-2.115-8.808 1.115-17.115 3.231-8.308 9.308-13.577t16.615-6.884l181.307-15.846 70.384-166.846q3.846-9.307 11.653-13.769 7.808-4.461 16.5-4.461t16.5 4.461q7.807 4.462 11.653 13.769l70.384 166.846 181.307 15.846q10.538 1.615 16.615 6.884 6.077 5.269 9.308 13.577 3.23 8.307 1.115 17.115-2.115 8.807-9.807 15.499L639.691-408.308l41.307 176.691q2.616 9.923-1.231 18.115-3.846 8.192-10.922 13.269-7.077 5.077-15.808 5.885-8.73.807-17.422-4.27L480-292.463Z"/></svg>
            );
        }

        if (hasHalfStar) {
            stars.push(
                <svg key={'halfStar'} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-675v312l126 77-33-144 111-96-146-13-58-136Zm0 382.537-155.615 93.845q-8.692 5.077-17.422 4.27-8.731-.808-15.808-5.885-7.076-5.077-10.922-13.269-3.847-8.192-1.231-18.115l41.307-176.691-137.384-118.923q-7.692-6.692-9.807-15.499-2.115-8.808 1.115-17.115 3.231-8.308 9.308-13.577t16.615-6.884l181.307-15.846 70.384-166.846q3.846-9.307 11.653-13.769 7.808-4.461 16.5-4.461t16.5 4.461q7.807 4.462 11.653 13.769l70.384 166.846 181.307 15.846q10.538 1.615 16.615 6.884 6.077 5.269 9.308 13.577 3.23 8.307 1.115 17.115-2.115 8.807-9.807 15.499L639.691-408.308l41.307 176.691q2.616 9.923-1.231 18.115-3.846 8.192-10.922 13.269-7.077 5.077-15.808 5.885-8.73.807-17.422-4.27L480-292.463Z"/></svg>
            );
        }

        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars.push(
                <svg key={i + 10} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143Zm126-5.463-155.615 93.845q-8.692 5.077-17.422 4.27-8.731-.808-15.808-5.885-7.076-5.077-10.922-13.269-3.847-8.192-1.231-18.115l41.307-176.691-137.384-118.923q-7.692-6.692-9.807-15.499-2.115-8.808 1.115-17.115 3.231-8.308 9.308-13.577t16.615-6.884l181.307-15.846 70.384-166.846q3.846-9.307 11.653-13.769 7.808-4.461 16.5-4.461t16.5 4.461q7.807 4.462 11.653 13.769l70.384 166.846 181.307 15.846q10.538 1.615 16.615 6.884 6.077 5.269 9.308 13.577 3.23 8.307 1.115 17.115-2.115 8.807-9.807 15.499L639.691-408.308l41.307 176.691q2.616 9.923-1.231 18.115-3.846 8.192-10.922 13.269-7.077 5.077-15.808 5.885-8.73.807-17.422-4.27L480-292.463ZM480-470Z"/></svg>
            );
        }

        return stars;
    };

    return (
        <section className={styles.testimonials}>
        <h1>What the community says</h1>
        <div className={styles.horizontal}>
            {
                data.map((testimonial, index) => {
                    return (
                        <div key={index} className={styles.testimonial}>
                            <div className={styles.header}>
                                {/* <img className={styles.profilePicture} src='https://via.placeholder.com/60x60'></img> */}
                                <img className={styles.profilePicture} src={testimonial.image} alt="profile picture" width={60} height={60} />
                                <div className={styles.vertical}>
                                    <div className={styles.name}>{testimonial.name}</div>
                                    {
                                        testimonial.certifiedUser && (
                                            <div className={styles.certifiedUser}>Certified user</div>
                                        )
                                    }
                                </div>
                            </div>

                            <div className={styles.stars}>
                                    {renderStars(testimonial.starRating)}
                            </div>
                            <div className={styles.title}>{testimonial.title}</div>
                            <div className={styles.review}>{testimonial.review}</div>
                        </div>
                    );
                })
            }
        </div>
        </section>
    );
}