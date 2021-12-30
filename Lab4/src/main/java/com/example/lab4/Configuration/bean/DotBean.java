package com.example.lab4.Configuration.bean;

import lombok.Data;
import org.springframework.stereotype.Component;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Data
public class DotBean implements BasicBean, Serializable {
    private List<Dot> dotsList = new ArrayList<>();

    public int getNum(){
        return this.dotsList.size();
    }

    @Override
    public Dot addDot(Dot dot) {
        this.dotsList.add(dot);
        return dot;
    }

    @Override
    public Dot deleteDot(Dot dot) {
        this.dotsList.remove(dot);
        return dot;
    }
}
