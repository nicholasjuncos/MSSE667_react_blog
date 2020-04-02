package com.react_blog.payload.request;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class PostRequest {
    SimpleDateFormat formatter = new SimpleDateFormat("MM/dd/YYYY");
//    @NotBlank
//    private User author;
//
//    public User getAuthor() {
//        return author;
//    }
//
//    public void setAuthor(User author) {
//        this.author = author;
//    }

    @NotNull
    private Boolean published;

    @NotNull
    private Date postDate;

    @NotBlank
    @Size(max = 50)
    private String title;

    @Size(max = 50)
    private String title2;

    @NotBlank
    @Size(max = 50)
    private String subtitle1;

    @NotBlank
    @Size(max = 1000)
    private String description1;

    @Size(max = 50)
    private String subtitle2;

    @Size(max = 1000)
    private String description2;

    @Size(max = 50)
    private String subtitle3;

    @Size(max = 1000)
    private String description3;

    @Size(max = 500)
    private String quote1;

    @Size(max = 100)
    private String quoter1;

    @Size(max = 500)
    private String quote2;

    @Size(max = 100)
    private String quoter2;

    @Size(max = 500)
    private String category;

//    private Integer likeCount;

    //    private Image coverImg;
//    private Image image1;
//    private Image image2;
//    private Image image3;

    public Boolean getPublished() {
        return published;
    }

    public void setPublished(Boolean published) {
        this.published = published;
    }

    public Date getPostDate() {
        return postDate;
    }

    public void setPostDate(String postDate) throws ParseException {
        this.postDate = formatter.parse(postDate);
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getTitle2() {
        return title2;
    }

    public void setTitle2(String title2) {
        this.title2 = title2;
    }

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

    public String getSubtitle2() {
        return subtitle2;
    }

    public void setSubtitle2(String subtitle2) {
        this.subtitle2 = subtitle2;
    }

    public String getDescription2() {
        return description2;
    }

    public void setDescription2(String description2) {
        this.description2 = description2;
    }

    public String getSubtitle3() {
        return subtitle3;
    }

    public void setSubtitle3(String subtitle3) {
        this.subtitle3 = subtitle3;
    }

    public String getDescription3() {
        return description3;
    }

    public void setDescription3(String description3) {
        this.description3 = description3;
    }

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

    public String getQuote2() {
        return quote2;
    }

    public void setQuote2(String quote2) {
        this.quote2 = quote2;
    }

    public String getQuoter2() {
        return quoter2;
    }

    public void setQuoter2(String quoter2) {
        this.quoter2 = quoter2;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

//    public Integer getLikeCount() {
//        return likeCount;
//    }
//
//    public void setLikeCount(Integer likeCount) {
//        this.likeCount = likeCount;
//    }
}
