package com.example.lab4.controller;

import com.example.lab4.Configuration.bean.Dot;
import com.example.lab4.Configuration.bean.DotBean;
import com.example.lab4.Dto.ResponseDot;
import com.example.lab4.Lab4Application;
import org.springframework.beans.factory.support.DefaultSingletonBeanRegistry;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

@Controller
public class GetDotController {
    @ResponseBody
    @RequestMapping(value = "/getDot")
    public ResponseDot getDot(HttpServletRequest request){
        try {
            Integer X = Integer.parseInt(request.getParameter("X"));
            Double Y = Double.parseDouble(request.getParameter("Y"));
            Integer R = Integer.parseInt(request.getParameter("R"));
            if(Y>3.0||Y<-3.0){
                ResponseDot responseDot = new ResponseDot();
                responseDot.setMessage("Please make sure your y is not bigger than 3, and not smaller than -3\n");
                return responseDot;
            }
            //get bean
            DotBean bean = (DotBean) Lab4Application.AC.getBean("dotBean");
            //destroy old one
            DefaultSingletonBeanRegistry registry = (DefaultSingletonBeanRegistry) Lab4Application.AC.getBeanFactory();
            registry.destroySingleton("dotBean");
            Dot newDot = new Dot(X, Y, R);
            bean.addDot(newDot);
            //create new one
            registry.registerSingleton("dotBean", bean);
            return new ResponseDot(newDot.getX(),newDot.getY(),newDot.getR(),newDot.getHit(),newDot.getDate(),"success\n",false);
        }catch (NumberFormatException e){
            ResponseDot responseDot = new ResponseDot();
            responseDot.setMessage("Please input a available number for Y(like 2, -1.0, 1.5)\n");
            return responseDot;
        }
    }
}
