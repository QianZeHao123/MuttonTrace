package main

import (
	"github.com/gin-gonic/gin"
	"mutton/testFunc"
)

type StructA struct {
	FieldA string `form:"field_a"`
}

type StructB struct {
	NestedStruct StructA
	FieldB       string `form:"field_b"`
}

type StructC struct {
	NestedStructPointer *StructA
	FieldC              string `form:"field_c"`
}

type StructD struct {
	NestedAnonyStruct struct {
		FieldX string `form:"field_x"`
	}
	FieldD string `form:"field_d"`
}

func GetDataB(c *gin.Context) {
	var b StructB
	err := c.Bind(&b)
	if err != nil {
		return
	}
	c.JSON(200, gin.H{
		"a": b.NestedStruct,
		"b": b.FieldB,
	})
}

func GetDataC(c *gin.Context) {
	var b StructC
	err := c.Bind(&b)
	if err != nil {
		return
	}
	c.JSON(200, gin.H{
		"a": b.NestedStructPointer,
		"c": b.FieldC,
	})
}

func GetDataD(c *gin.Context) {
	var b StructD
	err := c.Bind(&b)
	if err != nil {
		return
	}
	c.JSON(200, gin.H{
		"x": b.NestedAnonyStruct,
		"d": b.FieldD,
	})
}

func main() {
	testFunc.OutputStr()
	r := gin.Default()
	r.GET("/getb", GetDataB)
	r.GET("/getc", GetDataC)
	r.GET("/getd", GetDataD)

	err := r.Run()
	if err != nil {
		return
	}
}
