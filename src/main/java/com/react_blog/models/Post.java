package com.react_blog.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.data.annotation.Id;

import java.util.Date;

public class Post {
    @Id
    private String _id;
    private User author;
    private Boolean published;

    @JsonFormat(pattern="MM/dd/yyyy")
    private Date postDate;
    private String title;
//    private String title2;
    private String subtitle1;
    private String description1;
//    private String subtitle2;
//    private String description2;
//    private String subtitle3;
//    private String description3;
    private String quote1;
    private String quoter1;
//    private String quote2;
//    private String quoter2;
    private String category;
    private Integer likeCount;
//    private Image coverImg;
//    private Image image1;
//    private Image image2;
//    private Image image3;

    public Post(User author, Boolean published, Date postDate, String title,
//                String title2,
                String subtitle1, String description1,
//                String subtitle2, String description2, String subtitle3, String description3,
                String quote1, String quoter1,
//                String quote2, String quoter2,
                String category, Integer likeCount) {
        this.author = author;
        this.published = published;
        this.postDate = postDate;
        this.title = title;
//        this.title2 = title2;
        this.subtitle1 = subtitle1;
        this.description1 = description1;
//        this.subtitle2 = subtitle2;
//        this.description2 = description2;
//        this.subtitle3 = subtitle3;
//        this.description3 = description3;
        this.quote1 = quote1;
        this.quoter1 = quoter1;
//        this.quote2 = quote2;
//        this.quoter2 = quoter2;
        this.category = category;
        this.likeCount = likeCount;
    }

    public String get_id() {
        return _id;
    }

    public User getAuthor() {
        return author;
    }

    public void setAuthor(User author) {
        this.author = author;
    }

    public Boolean getPublished() {
        return published;
    }

    public void setPublished(Boolean published) {
        this.published = published;
    }

    public Date getPostDate() {
        return postDate;
    }

    public void setPostDate(Date postDate) {
        this.postDate = postDate;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

//    public String getTitle2() {
//        return title2;
//    }

//    public void setTitle2(String title2) {
//        this.title2 = title2;
//    }

    public String getSubtitle1() {
        return subtitle1;
    }

    public void setSubtitle1(String subtitle1) {
        this.subtitle1 = subtitle1;
    }

    public String getDescription1() {
        return description1;
    }

    public void setDescription1(String description1) {
        this.description1 = description1;
    }

//    public String getSubtitle2() {
//        return subtitle2;
//    }
//
//    public void setSubtitle2(String subtitle2) {
//        this.subtitle2 = subtitle2;
//    }
//
//    public String getDescription2() {
//        return description2;
//    }
//
//    public void setDescription2(String description2) {
//        this.description2 = description2;
//    }
//
//    public String getSubtitle3() {
//        return subtitle3;
//    }
//
//    public void setSubtitle3(String subtitle3) {
//        this.subtitle3 = subtitle3;
//    }
//
//    public String getDescription3() {
//        return description3;
//    }
//
//    public void setDescription3(String description3) {
//        this.description3 = description3;
//    }

    public String getQuote1() {
        return quote1;
    }

    public void setQuote1(String quote1) {
        this.quote1 = quote1;
    }

    public String getQuoter1() {
        return quoter1;
    }

    public void setQuoter1(String quoter1) {
        this.quoter1 = quoter1;
    }

//    public String getQuote2() {
//        return quote2;
//    }
//
//    public void setQuote2(String quote2) {
//        this.quote2 = quote2;
//    }
//
//    public String getQuoter2() {
//        return quoter2;
//    }
//
//    public void setQuoter2(String quoter2) {
//        this.quoter2 = quoter2;
//    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Integer getLikeCount() {
        return likeCount;
    }

    public void setLikeCount(Integer likeCount) {
        this.likeCount = likeCount;
    }

    public void update(Boolean published, Date postDate, String title,
//                       String title2,
                       String subtitle1, String description1,
//                       String subtitle2, String description2, String subtitle3, String description3,
                       String quote1, String quoter1,
//                       String quote2, String quoter2,
                       String category) {
        this.published = published;
        this.postDate = postDate;
        this.title = title;
//        this.title2 = title2;
        this.subtitle1 = subtitle1;
        this.description1 = description1;
//        this.subtitle2 = subtitle2;
//        this.description2 = description2;
//        this.subtitle3 = subtitle3;
//        this.description3 = description3;
        this.quote1 = quote1;
        this.quoter1 = quoter1;
//        this.quote2 = quote2;
//        this.quoter2 = quoter2;
        this.category = category;
    }
}
