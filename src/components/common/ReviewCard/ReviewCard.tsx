import React from 'react'
import Image from 'next/image';
import { Review } from '@/types/Review';
import { FillHeart, OutlineHeart } from '@/components/icon';

const styles = {
  reviewContainer: "w-full h-auto flex justify-start border rounded-md p-2 hover:drop-shadow-lg hover:cursor-pointer duration-100",
  heartContainer: "w-16 h-fulll flex flex-col justify-center items-center",
  heartup: "my-2 hover:-translate-y-2 hover:drop-shadow-lg duration-200",
  heartupCount: "text-center",
  reviewHeader: "w-full flex justify-between duration-100",
  reviewTitle: "text-xl font-bold",
  reviewBody: "h-[84px] mt-2 text-md",
  reviewInfo: "w-full flex justify-between items-center",
  reviewMetadata: "flex justify-start items-center",
  reviewUsername: "ml-4 text-sm",
  reviewDate: "ml-4 text-sm",
  reviewTags: "flex justify-end items-end"
}

const ReviewCard = ({ title, like, body, username, date, tags }: Review) => {
  return (

    <section className={styles.reviewContainer}>
      <div className={styles.heartContainer}>
        <div className={styles.heartup}>
          <OutlineHeart />
        </div>
        <div className={styles.heartupCount}>{like}</div>
      </div>
      <div className='w-full'>
        <div className={styles.reviewHeader}>
          <div className={styles.reviewTitle}>{title}</div>
        </div>
        <div className={styles.reviewBody}>
          {body}
        </div>
        <div className={styles.reviewInfo}>
          <div className={styles.reviewMetadata}>
            <Image
              src={'/sample/sampleProfile.svg'}
              alt='User'
              width={40}
              height={40}
            />
            <div>
              <div className={styles.reviewUsername}>
                {username}  
              </div>
              <div className={styles.reviewDate}>
                {date}
              </div>
            </div>
          </div>
          <div className={styles.reviewTags}>
            {tags.map((tag) => {
              return (
                <div key={tag.tag_idx}>
                  #{tag.tag_name}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReviewCard