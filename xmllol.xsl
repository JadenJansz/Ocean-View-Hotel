<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">

<html>
    <head>
        <style type="text/css">
            h1{color:blue;font-size:40pt;
            }

            h2{font-weight:bold;font-style:italic;
            }

            h3{font-size:20pt;
            }
        </style>
    </head>

    <body>
        <h1>Sun Generators Ltd</h1>

        <p>A special discount of 20% will be given to all the 
            <xsl:value-of select="Items/Item/Description"/> 17th February 2014. 
        </p>

        <h2>Special Discount Price: Rs <xsl:value-of select="Items/Item/Price"/></h2>
    </body>
</html>

</xsl:template>

</xsl:stylesheet>